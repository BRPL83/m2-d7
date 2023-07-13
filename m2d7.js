//Parte 1
function searchJobsByPosition (titleQuery, locationQuery){ //Creo la funzione chiamata searchJobsByPosition con all'interno 
    const result = []    //Qui con la const result []inizializzo l'array vuoto e serve per memorizzare i lavori che 
                         //che soddisfano entrambi i criteri di ricerca ovvero la posizione lavorativa e geografica.   
    for (let i = 0; i < jobs.length; i++){//Con questo for if mi serve per  iterare tutti gli elementi del mio array jobs
        const job = jobs[i];//Con questo mi servo per ricavare l'oggetto lavoro corrente su cui fare la verifica.
        
        if( //Qui ovviamente lo uso per controllare se sia il titolo che la posizione geografica corrispondono alla ricerca
            job.title.toLowerCase().includes(titleQuery.toLowerCase()) && //Qui uso l'and logico per verificare entrambe
            job.location.toLocaleLowerCase().includes(locationQuery.toLowerCase()) //Uso toLowerCase per livellare eventuali
        ){//discrepanze tra maiuscolo e minuscolo rendendo tutto minuscolo il contenuto dell'array jobs stringe "title" e "location"   
            result.push(job);   //Qua pusho il mio risultato job smistato                                                    
        }
    }
    return result; //Qua invece mi mi fa visionare il risutato finale
}

const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
      title: "Customer Service - Cloud Video Production",
      location: "NZ, Auckland",
    },
    {
      title: "Commissioning Machinery Assistant (CMA)",
      location: "US, IA, Wever",
    },
    {
      title: "Account Executive - Washington DC",
      location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
      title: "Lead Guest Service Specialist",
      location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
      title: "Customer Service Associate - Part Time",
      location: "US, AZ, Phoenix",
    },
    {
      title: "ASP.net Developer Job opportunity at United States,New Jersey",
      location: "US, NJ, Jersey City",
    },
    {
      title: "Talent Sourcer (6 months fixed-term contract)",
      location: "GB, LND, London",
    },
    {
      title: "Applications Developer, Digital",
      location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
      title: "VP of Sales - Vault Dragon",
      location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
      title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
      location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
      title: "Process Controls Engineer - DCS PLC MS Office - PA",
      location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
      title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
      location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
      title: "HAAD/DHA Licensed Doctors Opening in UAE",
      location: "AE, AZ, Abudhabi",
    },
    {
      title: "Talent Management Process Manager",
      location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
      title: "Customer Service Technical Specialist",
      location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
      title: "English Teacher Abroad",
      location: "US, NY, Saint Bonaventure",
    },
];

const titleQuery = "dev"; //Qui definisco i parametri titleQuery e locationQuery
const locationQuery = "US";

const searchResult = searchJobsByPosition(titleQuery, locationQuery);//Qui il risultato della ricerca passa alla variabile 
console.log(searchResult); //Qui stampo nella con console.log(searchResult)

//Parte 2
function search(){
  const titleQuery = document.getElementById("titleQuery").value;
  const locationQuery = document.getElementById("locationQuery").value;

  const searchResult = searchJobsByPosition(titleQuery, locationQuery);

  const resultList = document.getElementById("resultList");
  resultList.innerHTML = "";

  for(let i = 0; i < searchResult.length; i++) {
    const job = searchResult[i];
    const listItem = document.createElement("li");
    listItem.textContent = job.title + " - " + job.location;
    resultList.appendChild(listItem);
  }
}


