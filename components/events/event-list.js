/* eslint-disable react/prop-types */
import React from "react";
import EventItem from "./event-item";
import classes from "./eventList.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          image={event.image}
          location={event.location}
          key={event.id}
          date={event.date}
        />
      ))}
    </ul>
  );
}

export default EventList;
