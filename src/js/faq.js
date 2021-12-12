const faqs = [
    {
        categoryName: "General",
        question: "What questions do your clients usually ask?",
        answer: "Please provide comprehensive answers to those questions. You will save lots of time and money by eliminating the necessity to give constant support. You also will keep your clients' time cause they will quickly find the answers to all their questions.",
    },
    {
        "categoryName": "Collection",
        "question": "What the fuck",
        "answer": "Please provide comprehensive answers to those questions. You will save lots of time and money by eliminating the necessity to give constant support. You also will keep your clients' time cause they will quickly find the answers to all their questions.",
    },
    {
        "categoryName": "Repair",
        "question": "What questions do your clients usually ask?",
        "answer": "Please provide comprehensive answers to those questions. You will save lots of time and money by eliminating the necessity to give constant support. You also will keep your clients' time cause they will quickly find the answers to all their questions.",
    }

];

// import FAQ from '../data/faq.json'

// const faqFlag = faqs.map(faq => {
//     const { answer, categoryName, question } = faq
//         `
//             <div>${categoryName}</div>
//         `
// })

let category = 'Collection'

const clik = document.querySelector('.clik')

clik.addEventListener('click', () => {
    document.getElementById('testOut').innerHTML = faqs.filter(faq =>  faq.categoryName === 'General').map(faq => 
        `
                        <div class="faq-box-4 faq-box w-11/12 h-10 border-t border-b py-3 overflow-y-hidden">
                            <div class="top flex justify-between items-center">
                                <h5 class="font-inter text-xs">
                                    ${faq.question}
                                </h5>
    
                                <svg class="w-2 transition duration-500" viewBox="0 0 14 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.9998 6.20479L1.39755 0.602539L0.602051 1.39803L6.9998 7.79578L13.3975 1.39803L12.602 0.602539L6.9998 6.20479Z"
                                        fill="#2E2B26" />
                                </svg>
                            </div>
    
                            <div class="bottom mt-3 hidden">
                                <p class="font-inter font-light text-tiny">
                                    ${faq.answer}
                                </p>
                            </div>
                        </div>
            `
    ).join('');
} )