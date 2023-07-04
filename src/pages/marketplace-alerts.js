import Button from "@/components/Button";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Header } from "@/components/Header";
import Input from "@/components/Input";
import NumberInput from "@/components/NumberInput";
import Select from "@/components/Select";
import axios from "axios";
import Head from "next/head";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function MarketplaceAlerts() {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [location, setLocation] = useState("");
  const [itemCondition, setItemCondition] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [marketplaceSearches, setMarketplaceSearches] = useState([]);

  useEffect(() => {
    // if there is an email in local storage, set it in the state
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
      getMarketplaceSearches(email);
    }
  }, []);

  async function search(e) {
    e.preventDefault();
    try {
      setIsLoading(true);

      localStorage.setItem("email", email);

      const res = await axios({
        method: "post",
        url: `/api/marketplaceSearch`,
        data: {
          query,
          email,
          minPrice,
          maxPrice,
          location,
          itemCondition,
        },
      });

      setQuery("");
      setMinPrice(null);
      setMaxPrice(null);
      setLocation("");
      setItemCondition("");

      toast.success("Search saved!");

      await getMarketplaceSearches(email);
    } catch (error) {
      console.log("error at search", error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function getMarketplaceSearches(localEmail) {
    try {
      const res = await axios({
        method: "post",
        url: `/api/getMarketplaceSearches`,
        data: {
          email: localEmail ? localEmail : email,
        },
      });
      setMarketplaceSearches(res.data);
    } catch (error) {
      console.log("error at getMarketplaceSearches", error.message);
    }
  }

  return (
    <>
      <Head>
        <title>Property Data Provider for County Websites</title>
        <meta
          name="description"
          content="Get property data from county websites automatically"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="p-8 md:max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
          Facebook Marketplace Alerts
        </h2>

        <p className="mt-4 text-lg leading-7 text-zinc-200">
          Get notified when new items are listed on Facebook Marketplace
        </p>

        <br></br>

        <form onSubmit={search}>
          <Input
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What are you searching for?"
            title="Search"
          />

          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="zuck@fb.com"
            title="Email"
          />

          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Austin, TX"
            title="Location"
          />

          <NumberInput
            title="Min Price"
            id="minPrice"
            // placeholder="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <NumberInput
            title="Max Price"
            id="maxPrice"
            // placeholder="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <Select
            title="Item Condition"
            id="itemCondition"
            placeholder={"Select an item condition"}
            value={itemCondition}
            onChange={(e) => setItemCondition(e.target.value)}
            options={[
              { value: "new", label: "New" },
              { value: "used_like_new", label: "Used - Like new" },
              { value: "used_good", label: "Used - Good" },
              { value: "used_fair", label: "Used - Fair" },
            ]}
          />

          <Button isLoading={isLoading} type="submit" title="Submit" />
        </form>

        <div className="my-8">
          <h3 className="text-lg mb-4">Saved Searches</h3>
          <Table>
            <Thead>
              <Tr>
                <Th>Search Term</Th>
                <Th>Location</Th>
                <Th>Min Price</Th>
                <Th>Max Price</Th>
                <Th>Item Condition</Th>
              </Tr>
            </Thead>
            <Tbody>
              {marketplaceSearches.map((search) => {
                return (
                  <Tr key={search?.id}>
                    <Td>{search?.query}</Td>
                    <Td>{search?.location}</Td>
                    <Td>{search?.min_price}</Td>
                    <Td>{search?.max_price}</Td>
                    <Td>{search?.item_condition}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </div>
      </div>
      <div className="mt-8">
        <h3>Need something scraped? Hire me.</h3>
      </div>
    </>
  );
}
