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

export default function Tools() {
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

      <div className="py-24">
        <a
          className="text-indigo-400 hover:text-indigo-500"
          href="/marketplace-alerts"
        >
          Facebook Marketplace Alerts
        </a>
      </div>
    </>
  );
}
