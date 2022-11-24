const quotes = [
  {
    quote:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    author: 'Author 1',
    year: '2001',
  },
  {
    quote: 'It is a long established fact that a reader will be distracted',
    author: 'Cristian',
    year: '2022',
  },
  {
    quote: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
    author: 'Alberto',
    year: '2021',
  },
];

const quoteList = document.querySelector('#quotes-list');

const getQuoteTemplate = (quote, author, year) => {
  return `<div class="quote-block">
    <blockquote> ${quote}</blockquote>
    <p>${author} - ${year}</p>
    </div>`;
};

const setupQuotesList = () => {

  for (let i = 0; i < quotes.length; i++) {
    const quoteElement = quotes[i];

    quoteList.innerHTML += getQuoteTemplate(
      quoteElement.quote,
      quoteElement.author,
      quoteElement.year
    );
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  const newQuote = {
    quote: formElements.quote.value,
    author: formElements.author.value,
    year: formElements.year.value,
  };

  quoteList.innerHTML += getQuoteTemplate(
    newQuote.quote,
    newQuote.author,
    newQuote.year
    );
    event.target.reset();
};

const form = document.querySelector('#quote-form');
form.addEventListener('submit', handleFormSubmit);

setupQuotesList();