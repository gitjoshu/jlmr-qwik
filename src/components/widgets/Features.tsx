import { component$ } from "@builder.io/qwik";
import { IconStar } from "~/components/icons/IconStar";

export default component$(() => {
  const items = [
    [
      {
        title: "Quis autem",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icon: "tabler:brand-tailwind",
      },
      {
        title: "Lorem Ipsum passage",
        description:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        icon: "tabler:components",
      },
      {
        title: "Sed ut perspiciatis",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
        icon: "tabler:list-check",
      },
    ],
    [
      {
        title: "Bonorum et Malorum",
        description:
          "it amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: "tabler:rocket",
      },
      {
        title: "At vero eos et accusamus",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
        icon: "tabler:arrows-right-left",
      },
      {
        title: "Finibus Bonorum et Malorum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
        icon: "tabler:bulb",
      },
    ],
  ];

  return (
    <section class="scroll-mt-16" id="features">
      <div class="px-4 py-5 mx-auto max-w-6xl lg:px-8 lg:py-10">
        <div class="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
          <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
            SERVICES
          </p>
          <h2 class="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
            <span class="whitespace-nowrap">JLMR</span>
          </h2>
          <p class="max-w-3xl mx-auto sm:text-center text-xl text-gray-600 dark:text-slate-400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div class="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0">
          {items.map((subitems) => (
            <div class="space-y-8 sm:px-8">
              {subitems.map(({ title, description }) => (
                <div class="flex flex-row max-w-md">
                  <div class="mb-4 mr-4">
                    <div class="text-white flex items-center justify-center w-12 h-12 rounded-full bg-secondary-500 dark:bg-secondary-700">
                      <IconStar />
                    </div>
                  </div>
                  <div>
                    <h3 class="mb-3 text-xl font-bold">{title}</h3>
                    <p class="text-gray-600 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
