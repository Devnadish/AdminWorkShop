
import ClientCard from '@/app/dashboard/clients/_component/ClientCard';

function ShowClients({ clients }) {
    return (
        <div className='grid grid-cols-1 place-items-start gap-6 md:grid-cols-3  '>
                {clients?.map((client) => (
                    <ClientCard key={client.id} clientName={client.clientName}
                        phone={client.mobile}
                        email={client.email}
                        carNo={client.CarNo}
                        carName={client.carName}
                        CarCount={client.CarCount}
                        id={client.id}
                    />
                ))}
        </div>
    )
}

export default ShowClients