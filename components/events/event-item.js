/* eslint-disable react/prop-types */
import React from "react";
import Link from "next/link";
import classes from "./eventItem.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={id} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title} </h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address className={classes.address}>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}> Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;