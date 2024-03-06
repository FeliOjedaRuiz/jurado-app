import EventsForm from "../components/events/events-form/EventsForm";
import GeneralLayout from "../components/layouts/GeneralLayout";

function CreateEventPage() {
  return (
    <GeneralLayout>
      <div className="flex flex-col bg-gray-200 w-full p-8 items-center lg:justify-center">
        <div className="font-bold text-2xl lg:text-4xl text-teal-800 mb-12 mt-4 lg:mt-0 lg:mb-8">
          <p>Crea un nuevo evento</p>
        </div>
        
          <EventsForm/>
        
      </div>
    </GeneralLayout>
  );
}

export default CreateEventPage;
