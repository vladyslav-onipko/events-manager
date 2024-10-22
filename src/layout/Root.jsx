import { Tooltip } from 'react-tooltip';

import Header from './Header';
import EventsTable from '../components/event/table/EventsTable';

const Root = () => {
  return (
    <div className="w-full h-full flex flex-col min-h-screen overflow-x-hidden">
      <div
        className={`w-full h-[500px] mx-auto my-0 bg-[url('/src/assets/images/events.jpg')] bg-no-repeat bg-cover bg-center md:h-[300px] sm:h-[150px]`}
      >
        <Header />
      </div>
      <main className="w-full h-screen relative" role="main">
        <EventsTable />
        <Tooltip id="event-tooltip" style={{ backgroundColor: '#134E4A', zIndex: 9999 }} />
      </main>
    </div>
  );
};

export default Root;
