import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import Features from "~/components/widgets/Features";
import { SITE } from "~/config.mjs";

export default component$(() => {
    return (
        <>
            <Features />
        </>
    );
  });



  export const head: DocumentHead = {
    title: 'JLMR - SERVICES ',
    meta: [
      {
        name: "description",
        content: SITE.description,
      }
    ],
  };