import Filtering from "@/app/_pagecomponent/clients/display/Filtering";
import { getAllClients } from "@/db/clients";
import React from "react";

export const dynamic = "force-dynamic";
const ClientList = async({ clients1, onEdit, onDelete }) => {
const clients = await getAllClients();
  return (
      <Filtering clientsData={clients} />
  );
};

export default ClientList;
