"use client";
import { Button } from "@heroui/button";
import { useState } from "react";
export default function AboutMePage() {
  let facts: string[] = [
    "Octopuses have three hearts, and two of them stop beating when they swim.",
    "The Eiffel Tower grows in heat.",
    "Bananas are berries; strawberries are not.",
    "Honey never spoils.",
    "Sloths move so slowly that algae can grow on their fur",
    "Koalas have unique fingerprints, just like humans.",
    "Wombat poop is cube-shaped to prevent it from rolling away.",
    "The heart of a blue whale is the size of a small car.",
    "Some turtles can breathe through their butts",
    "A group of flamingoes is called a flamboyance",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <Button
        className="m-2 border-3 border-white text-center"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Fun Facts!
      </Button>
      <p className="m-2 border-2 border-white text-center">{fact}</p>
      <p className="text-6xl text-center">About Me Page</p>
      <p className="text-4xl text-center text-orange-500">My Hobbies</p>
      <p className="text-2xl text-center text-white">
        <b>1. Skiing</b>
      </p>
      <div className="flex flex-wrap m-2 justify-center">
        <p className="m-2 border-3 border-red-600">
          <img alt="Yellow Skis" height={400} src="skis2.jpg" width={300} />
        </p>
        <p className="m-2 border-3 border-red-600">
          <img
            alt="Red Skis"
            className="fill"
            height={400}
            src="skis.jpg"
            width={300}
          />
        </p>
      </div>
      <p className="text-center">
        On the left are the current park skis i have and on the right are the
        new ones i got last weekend, I have been skiing for 7 years and ever
        since it has been something im very passionate about.
      </p>
      <a
        className="text-blue-400 m-3 text-center"
        href="https://www.touristsecrets.com/travel-guide/adventure/terrain-park-skiing-a-guide-to-the-thrilling-discipline/"
        rel="noreferrer"
        target="_blank"
      >
        <b>Learn: What is Park Skiing</b>
      </a>
      <p className="text-2xl text-center text-white">
        <b>2. Soccer</b>
      </p>
      <div className="flex flex-wrap m-2 justify-center">
        <p className="m-2 border-3 border-green-500">
          <img
            alt="Me playing soccer"
            height={400}
            src="soccer.jpg"
            width={300}
          />
        </p>
      </div>
      <p className="text-center">
        When I cant ski i will be playing soccer with with my friends or for my
        club, soccer has been a big part of my life for a couple years now. I
        have been playing club for 4 years and for the Skyline team these past 2
        years. last year i won a pretty big tournament called Surf Cup with my
        club team, it was one of the most fun memories of my year and i still
        look back on it to this day.
      </p>
      <a
        className="text-blue-400 m-3 text-center"
        href="https://realsoccerblog.com/surf-cup-travel-guide/"
        rel="noreferrer"
        target="_blank"
      >
        <b>Learn: What is the Surf Cup Tournament?</b>
      </a>
    </div>
  );
}
