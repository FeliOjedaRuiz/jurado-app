import GeneralLayout from "../components/layouts/GeneralLayout";

function EventsPage() {
  return (
    <GeneralLayout>
      <div className="flex flex-col bg-gray-200 w-full p-8 items-center">
       <div className="bg-teal-100 font bold w-fit px-3 py-1 rounded-lg text-teal-800">
        <p>Selecciona o crea un nuevo evento</p>
       </div>
      </div>
    </GeneralLayout>
  );
}

export default EventsPage;
