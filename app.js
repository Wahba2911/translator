const textAreaOne = document.querySelector(".text-from");
const textAreaTwo = document.querySelector(".text-to");
const selectOne = document.querySelector(".select-from");
const selectTwo = document.querySelector(".select-to");
const translateBtn = document.querySelector(".translate-result");

const listOfLang = Object.keys(countries);

listOfLang.forEach((country) => {
  const option = `<option value=${country}>${countries[country]}</option>`;

  selectOne.innerHTML += option;
  selectTwo.innerHTML += option;
});

selectOne[19].selected = true;
selectTwo[1].selected = true;

translateBtn.addEventListener("click", async () => {
  try {
    const resultText = await getTranslatedData();
    textAreaTwo.value = resultText.responseData.translatedText;
  } catch (error) {
    console.log("Translation failed", error);
  }
});

const getTranslatedData = async () => {
  const data = await fetch(
    `https://api.mymemory.translated.net/get?q=${textAreaOne.value}&langpair=${selectOne.value}|${selectTwo.value}`,
  );

  const translatedText = await data.json();
  return translatedText;
};
