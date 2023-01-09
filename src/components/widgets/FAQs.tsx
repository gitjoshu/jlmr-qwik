import { component$ } from "@builder.io/qwik";
import { IconArrowDownRight } from "../icons/IconArrowDownRight";

export default component$(() => {
  const items = [
    [
      {
        question: "Lorem ipsum dolor sit amet?",
        answer: `Nunc eu enim in metus fringilla volutpat. Nulla efficitur elit felis, eget molestie mi aliquet at. Sed dapibus purus quis nibh blandit, a porttitor ex bibendum. Praesent eleifend ligula sem, a varius tellus commodo id.`,
      },
      {
        question: "Sed quis sapien ut lectus faucibus accumsan. Sed a tempus eros?",
        answer: `Proin interdum placerat ornare. Aenean gravida sed magna at blandit. Nullam consectetur ornare feugiat. Morbi tortor justo, rutrum id scelerisque non, egestas vel ipsum. In at libero cursus, ornare tortor eget, tincidunt est.`,
      },
    ],
    [
      {
        question: "Sed aliquet tempor turpis, non accumsan velit?",
        answer: `Duis vitae ipsum consequat est molestie rhoncus sit amet id sapien. Sed sit amet massa non nunc viverra pellentesque a vitae justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ullamcorper ante magna, ac commodo quam varius sit amet.`,
      },
      {
        question: "Donec faucibus sed metus ullamcorper rutrum?",
        answer: `Vestibulum est purus, semper id nisl eu, vestibulum semper nibh. Praesent gravida, lacus vel aliquet elementum, massa velit varius ex, vitae ornare mauris eros vitae risus. Cras tristique pretium urna. Integer suscipit turpis arcu, eu lobortis leo malesuada gravida.`,
      },
    ],
  ];

  return (
    <section class="border-t border-gray-200 dark:border-slate-800">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
              FAQs
            </p>
            <h2 class="max-w-lg mb-4 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto font-heading">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div class="max-w-screen-xl sm:mx-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
            {items.map((subitems) => (
              <div class="space-y-8">
                {subitems.map(({ question, answer }) => (
                  <div>
                    <h3 class="mb-4 text-xl font-bold">
                      <IconArrowDownRight class="w-7 h-7 text-secondary-500 inline-block" />
                      {question}
                    </h3>
                    {answer.split("\n\n").map((paragraph) => (
                      <p class="text-gray-700 dark:text-gray-400 mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
