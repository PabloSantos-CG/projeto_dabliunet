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
    <section id="Questions" className="bg-gray-100">
      <div className="container m-auto px-4 py-20 text-black">
        <h2 className=" font-semibold mb-6">Dúvidas Frequentes</h2>
        <div>
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
      </div>
    </section>
  );
}
