import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want To Explore Our Travel Destinations?</h2>
        <p className="text-gray-500 my-2">
          Checkout our variety of destinations, from Hotels to Resorts
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.suetravels.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100+ Travel Destinations
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/suetravels-3fc42.appspot.com/o/images%2Fsue.png?alt=media&token=0a7a6922-1d48-4d96-8fc2-c58cbeea89ee" />
      </div>
    </div>
  );
}
