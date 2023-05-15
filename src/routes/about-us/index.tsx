import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import MapContact from "~/components/widgets/MapContact";
import Rating from "~/components/widgets/Rating";
import Reviews from "~/components/widgets/Reviews";
import { SITE } from "~/config.mjs";

export default component$(() => {
    return (
        <div class="container m-auto">
            <section class="scroll-mt-16" id="features">
                <div class="px-4 py-5 mx-auto max-w-6xl lg:px-8 lg:py-10">
                    <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
                    <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
                        ABOUT - US
                    </p>
                    <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
                        <span class="whitespace-nowrap">JLMR</span>
                    </h2>
                    <p class="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
                        Tock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua.
                    </p>
                    </div>
                    
                </div>
            </section>
            <MapContact />

            <Rating />
            <Reviews />
        </div>
    );
  });



  export const head: DocumentHead = {
    title: 'JLMR - ABOUT-US',
    meta: [
      {
        name: "description",
        content: SITE.description,
      }
    ],
  };