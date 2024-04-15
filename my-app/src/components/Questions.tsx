"use client";

import { dataQuestions } from "@/data/dataQuestions";
import Accordion from "./questions/Accordion";
import { useState } from "react";
import { DataQuestionsType } from "@/types/DataQuestions";

export default function Questions() {
  const [data, setData] = useState<DataQuestionsType[]>(dataQuestions);

  const toggleOpen = (id: string) => {
    setData((prevData) =>
      prevData.map((quest) => {
        if (quest.id === id) {
          return { ...quest, open: !quest.open };
        }
        return quest;
      })
    );
  };

  return (
    <section id="Questions">
      <div className="container m-auto px-4 text-black">
        {data.map((quest) => (
          <Accordion
            key={quest.id}
            open={quest.open}
            toggle={() => toggleOpen(quest.id)}
            title={quest.title}
            desc={quest.description}
          />
        ))}
      </div>
    </section>
  );
}
