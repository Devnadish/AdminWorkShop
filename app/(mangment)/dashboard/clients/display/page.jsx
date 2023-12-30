import Filtering from "@/components/pagecomponent/back/clients/display/Filtering";
import { getAllClients } from "@/db/clients";
import React from "react";


const ClientList = async({ clients1, onEdit, onDelete }) => {
const clients = await getAllClients();
  return (
      <Filtering clientsData={clients} />
  );
};

export default ClientList;
