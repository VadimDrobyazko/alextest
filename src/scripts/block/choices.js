const element = document.querySelector(".contact__input-select");

const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  placeholder: true,
  placeholderValue: "Choose your job type",
  classNames: {
    flippedState: "",
  },
});

export default choices;
