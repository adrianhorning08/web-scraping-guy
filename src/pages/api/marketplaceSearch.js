import axios from "axios";
import { supabase } from "supabaseClient";

export default async function handler(req, res) {
  try {
    const body = req.body;

    const { data, error } = await supabase
      .from("watched_searches")
      .insert({
        query: body?.query,
        location: body?.location,
        min_price: body?.minPrice,
        max_price: body?.maxPrice,
        item_condition: body?.itemCondition,
        email: body?.email,
      })
      .select("*");

    if (error) {
      throw new Error(error.message);
    }

    const watchedSearch = data[0];

    const listings = await searchFacebook(watchedSearch);

    for (let i = 0; i < listings.length; i++) {
      const newListing = listings[i];
      await insertListing(newListing, watchedSearch);
    }

    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log("error at marketplaceSearch", error.message);
    res.status(500).json({ error: error.message });
  }
}

async function searchFacebook(watchedSearch) {
  try {
    const res = await axios({
      method: "post",
      url: "https://sk4vco1qk8.execute-api.us-west-2.amazonaws.com/default/fb-marketplace-search-api",
      data: {
        location: watchedSearch?.location,
        query: watchedSearch?.query,
        minPrice: watchedSearch?.min_price,
        maxPrice: watchedSearch?.max_price,
        itemCondition: watchedSearch?.item_condition,
      },
    });
    return res.data;
  } catch (error) {
    console.log("error at searchFacebook", error.message);
  }
}

async function insertListing(newListing, watchedSearch) {
  try {
    const { data, error } = await supabase.from("fb_products").insert({
      id: newListing.listing.id,
      search_id: watchedSearch.id,
      title: newListing.listing.marketplace_listing_title,
      url: newListing.url,
      formatted_price: newListing.listing.listing_price.formatted_amount,
      amount: Number(newListing.listing.listing_price.amount),
      marketplace_listing_category_id:
        newListing.listing.marketplace_listing_category_id,
      seller_id: newListing.listing.marketplace_listing_seller.id,
      seller_name: newListing.listing.marketplace_listing_seller.name,
      city: newListing.listing?.location?.reverse_geocode?.city,
      state: newListing.listing?.location?.reverse_geocode?.state,
      image_url: newListing.listing?.primary_listing_photo?.image?.uri,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.log("error at insert Listing", error.message);
  }
}
