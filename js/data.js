const data = [
  {
    name: "Cory Booker",
    blurb: "Charismatický řečník",
    dob: "1969-04-27",
    desc: `
    <p>Senátor za stát New Jersey Cory Booker je sociální liberál, který podporuje stejnopohlavní sňatky i veřejné zdravotní pojištění. Před zvolením do Senátu působil v komunální politice: ve funkci starosty města Newark se stavěl za nízkopříjmové obyvatele, prosadil výrazné rozšíření výstavby dostupného bydlení a podařilo se mu snížit schodek městského rozpočtu o více než polovinu.</p>
    <p>Booker je známý jako charismatický politik a zdatný řečník, v čemž se podobá exprezidentu Baracku Obamovi. Díky svým vazbám na byznys a finanční sektor si je snadno schopen zajistit financování kampaně, zároveň je ale kvůli nim terčem kritiky levicových voličů.</p>
    `,
  },
  {
    name: "Pete Buttigieg",
    blurb: "Nadějný třicátník",
    dob: "1982-01-19",
    desc: `
    <p>Pete Buttigieg je starosta indianského města South Bend a bývalý firemní konzultant. Během svého působení v armádě byl nasazen v Afghánistánu. Je vůbec prvním otevřeně gay kandidátem na amerického prezidenta a pokud by byl zvolen, stal by se i nejmladším prezidentem.</p>
    <p>Buttigieg se v kampani profiluje jako hlas mladých, má však zkušenosti pouze s komunální politikou a oproti svým soupeřům je ale stále poměrně neznámý. Jeho kandidatura se tak považuje spíš za začátek cesty do vysoké politiky.</p>
    `,
  },
  {
    name: "Julian Castro",
    blurb: "Obamovec",
    dob: "1974-07-16",
    desc: `
    <p>Nejmladší ministr Baracka Obamy Julian Castro začínal jako radní a později starosta v texaském San Antoniu. V Obamově kabinetu zastával tři roky funkci ministra bytové výstavby. Ve volbách v roce 2016 podpořil Hillary Clinton, která o něm následně uvažovala jako o kandidátovi na viceprezidenta.</p>
    <p>Mezi demokraty je spíše centristou, který podporuje volný trh a v ekonomických otázkách ke svým levicovým spolukandidátům příliš netíhne, byť patří mezi sociální liberály a podporuje například LGBT práva a boj proti klimatické změně. Není ovšem příliš schopným řečníkem a podle analytika BBC Anthonyho Zurchera by mu více slušela viceprezidentská role.</p>
    `,
  },
  {
    name: "John Delaney",
    blurb: "Umírněný podnikatel",
    dob: "1963-04-16",
    desc: `
    <p>Podnikatel a bývalý kongresman John Delaney byl v červenci 2017 vůbec prvním, kdo oznámil kandidaturu v příštích prezidentských volbách. Označuje se za umírněného a ekonomicky je mezi demokraty spíše napravo. V kampani se chce zaměřit na pracovní místa, vzdělání a infrastrukturu.</p>
    <p>Komentátoři považují Delaneyho za centristu a on sám mluví o potřebě stavět mosty mezi demokraty a republikány. Taková snaha však v současné silně rozdělené Americe nemá mnoho příznivců, Delaney je tak mezi kandidáty spíše outsiderem.</p>
    `,
  },
  {
    name: "Tulsi Gabbard",
    blurb: "Rozporuplná válečná veteránka",
    dob: "1981-04-12",
    desc: `
    <p>Tulsi Gabbard je kongresmanka z Havaje, první hinduistka v americkém Kongresu. Sloužila jako medička ve válce v Iráku a později v Kuvajtu. Patří mezi levicové demokratické kandidáty, podporuje boj proti klimatické změně nebo bankovní regulace a odmítá americké mezinárodní intervence.</p>
    <p>Za některé své postoje je zároveň terčem kritiky. Kromě jiného nesouhlasí s americkou účastí ve válce v Sýrii, kde se v roce 2017 setkala s prezidentem Bašárem Asadem, a zastává tvrdší pozici v otázce migrace. Na začátku své kariéry navíc vystupovala proti potratům a stejnopohlavním sňatkům a propagovala léčení homosexuality. Dnes tyto postoje vysvětluje konzervativním prostředím, ve kterém vyrůstala, a ve všech hlasováních podporuje rovná lidská práva.</p>
    `,
  },
  {
    name: "Kirsten Gillibrand",
    blurb: "Senátorka z hnutí #MeToo",
    dob: "1966-12-09",
    desc: `
    <p>Právnička a senátorka Kirsten Gillebrand je kandidátkou, která se profiluje převážně feministickými tématy. Otevřeně mluví o sexismu v armádě i politice a podporuje hnutí #MeToo. Mimo jiné kritizuje exprezidenta Billa Clintona za skandál s Monikou Lewinskou a říká, že Clinton měl v důsledku kauzy rezignovat - což jí může ubrat body u demokratických příznivců Clintonových.</p>
    <p>Dřívejší ekonomicky konzervativní centristka se stejně jako celá strana postupně posunuje nalevo. Své postoje změnila v otázkách výdajů na sociální ochranu i kontroly držení zbraní. Se stranickou politikou se občas neshoduje, ale přízeň demokratických voliček ji může vynést mezi favority.</p>
    `,
  },
  {
    name: "Kamala Harris",
    blurb: "Kalifornská hvězda",
    dob: "1964-10-20",
    desc: `
    <p>Kamala Harris je v boji o demokratickou nominaci už dnes možnou favoritkou. Jako senátorka a bývalá generální prokurátorka Kalifornie má za sebou silný demokratický stát, s indicko-jamajskými kořeny také symbolizuje příklon demokratů k diverzitě. Ve své straně platí za jednu z nejlevicovějších: podporuje zdanění bohatých, veřejné zdravotní pojištění, legalizaci marihuany, přísnou kontrolu držení zbraní i bezplatné vysokoškolské vzdělání.</p>
    <p>Před působením v Senátu si získala pověst přísné prokurátorky, která se ale zároveň stavěla chladně k reformám vězeňského systému. V kampani dosud nemá v některých otázkách příliš jasno, například podle deníku The New York Times jsou ale u silného kandidáta schopného porazit Donalda Trumpa voliči ochotni přešlapy odpouštět.</p>
    `,
  },
  {
    name: "Amy Klobuchar",
    blurb: "bleh",
    dob: "1960-05-25",
    desc: `
    <p>Občanským povoláním je právnička: Nejprve získala v roce 1992 bakalářský titul Yaleovy univerzity, pak v roce 1985 titul doktora práv z Chicagské univerzity. Následně byla partnerkou ve dvou právnických společnostech v Minneapolisu, pak byla v roce 1998 zvolena do funkce státního zástupsce pro okres Hennepin, kteroužto funkci obhájila i v roce 2002.</p>
    `,
  },
  {
    name: "Bernie Sanders",
    blurb: "meh",
    dob: "1941-09-08",
    desc: `
    <p>Považuje se za demokratického socialistu a sociálního liberála inspirujícího se skandinávským modelem sociální demokracie, média jej ale škatulkují jako socialistu (v kontextu USA téměř hanlivý termín). Podle Noama Chomského je jeho program velmi podobný plánu New Deal.</p>
    `,
  },
  {
    name: "Elizabeth Warren",
    blurb: "glob",
    dob: "1949-06-22",
    desc: `
    <p>Bývá řazena k levicovému křídlu Demokratické strany. Jednatřicátého prosince 2018 ohlásila kandidaturu na prezidentku Spojených států. Usiluje o přísnější regulaci bankovního sektoru a o finančně dostupnější školství a zdravotnictví, podala také návrh zákona o střetu zájmů při výkonu prezidentské funkce.</p>
    `,
  },
  {
    name: "Marianne Williamson",
    blurb: "jeb",
    dob: "1952-07-08",
    desc: `
    <p>In 2014, as an Independent, Williamson ran unsuccessfully for the seat of California's 33rd congressional district in the United States House of Representatives elections in California. On January 29, 2019, she announced she was running for the Democratic nomination for the 2020 United States presidential election.</p>
    `,
  },
  {
    name: "Andrew Yang",
    blurb: "žblept",
    dob: "1975-01-13",
    desc: `
    <p>Yang je autorem knih Inteligentní lidé by měli budovat a Válka s normálními lidmi zabývající se automatizací práce. Yang jako svůj hlavní cíl prosazuje zavedení základního nepodmíněného příjmu pro každého dospělého Američana staršího 18 let. Agendu chápe jako součást filosofie kapitalismu soustředěného na člověka (Human-centered capitalism).</p>
    `,
  },
];

export default data;
