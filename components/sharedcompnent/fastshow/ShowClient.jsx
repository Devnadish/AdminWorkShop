"use client"

import { useState, useEffect } from 'react';
import { getClientById } from "@/db/clients";
import Caption from '../Caption';
import ShowDate from '../ShowDate';

const ShowClient = ({ id }) => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const clientData = await getClientById(id);
        setClient(clientData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>جلب المعلومات ...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='flex w-full items-center justify-start flex-col gap-5'>
        <ShowDate
        create={client.createdDate}
        update={client.updatedDate}
      />
          <Caption   title={"اسم العميل"} data={client.name} />
          <div className='flex w-full items-center justify-between gap-4 flex-wrap'>
          <Caption   title={"الجوال"} data={client.mobile} />
          <Caption   title={"الايميل"} data={client.email} />
          </div>
    </div>
  );
};

export default ShowClient;
