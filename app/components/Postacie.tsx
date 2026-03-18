import React, {useState, useEffect} from 'react'
import Powrot from './Powrot'
import { div } from 'motion/react-client';

const Postacie = () => {
    const [postac, setPostac]=useState(0);
    const postacie=[
        {
            name: "Hamlet",
            opis: "Tytułowy i główny bohater sztuki. Syn zmarłego króla Hamleta i Królowej Gertrudy i bratanek króla Klaudiusza. Ten filozof i idealista stanąć musi naprzeciw istniejącego w świecie i ludziach (w tym w nim samym) zła. Śmierć ojca i postępowanie matki (ślub ze stryjem), a także zwyczaje i zakłamanie panujące na dworze są przyczyną głębokiego kryzysu wartości Hamleta. Dodatkowo staje on w sytuacji, która wymaga od niego czynów w jego ocenie moralnej złych. To właśnie rozterki moralne Hamleta są źródłem jego czynów – a w zasadzie zaniechań. Związek matki z Klaudiuszem powoduje ponadto odrazę Hamleta do płci przeciwnej, a może raczej do życia uczuciowego i erotycznego – stąd być może odrzucenie Ofelii. Hamlet w scenie na cmentarzu wyznaje, iż kochał Ofelię – chociaż można to interpretować jako kolejny wybuch szaleństwa. Zresztą kwestia szaleństwa to jeden z najciekawszych problemów tego dramatu. Hamlet udaje szalonego, ale to nie znaczy, że szalonym faktycznie nie jest. Siłą sprawczą kierującą postępowaniem Hamleta jest zemsta: zdobywa poszlaki zbrodni, szczególnie że potwierdza je Horacy, jednak w momencie, gdy może zabić Klaudiusza, nie czyni tego. Dokona tego dopiero na samym końcu, wcześniej zabijając Laertesa, który jednak śmiertelnie go ranił. ",
            zdjecie: "/Hamlet/Hamlet.png",
            dzwiek: "Ham",
        },
        {
            name: "Klaudiusz",
            opis: "Król Danii, zdobył tron mordując swojego brata; po objęciu władzy żeni się z bratową, Gertrudą, z którą być może miał romans jeszcze za życia ojca Hamleta (nie wynika to wprost z treści). Energiczny i przebiegły sprawia wrażenie dobrego i skutecznego władcy, pewnego tego co robi i biegłego w sprawowaniu władzy. Socjopata, dążący po trupach do celu, jednak widać w nim także wyrzuty sumienia. Darzy uczuciem Gertrudę, jak i księcia Hamleta, którego postanawia zgładzić, dopiero gdy orientuje się, że ten zna prawdę o jego zbrodni. Intryga, jaką uknuł z Laertesem, prowadzi do końcowej tragedii. Ginie z rąk Hamleta. Klaudiusz jest kilkakrotnie porównywany przez Hamleta ze swoim bratem: w porównaniach tych Hamlet idealizuje ojca, przypisując jednocześnie stryjowi najgorsze cechy. ",
            zdjecie: "/Hamlet/Klaudiusz.png",
            dzwiek: "Klaudiusz",
        },
        {
            name: "Gertruda",
            opis: "Królowa Danii, żona zarówno zmarłego króla Hamleta, jak i następnie jego brata, Klaudiusza. Gertruda jest antytezą syna; koncentruje się przede wszystkim na cielesnych, zewnętrznych doznaniach, odrzucając z drugiej strony rozmyślania nad moralną oceną swoich czynów i ich efektów. Łatwo można ją sobie wyobrazić jako kobietę lubiącą wygodę i przepych i – sądząc ze zwyczajów panujących w Elsynorze – takim przepychem otoczoną. Zapewne kocha syna i cierpi, widząc, że nie akceptuje on jej związku z Klaudiuszem. Sama akceptuje związek syna z Ofelią, mimo że Ofelia nie pochodzi z wysokiego rodu. Ginie, wypiwszy przygotowane dla Hamleta zatrute wino. Można jedynie zgadywać, czy Gertruda związała się z Klaudiuszem dopiero po śmierci męża, czy też był on jej kochankiem jeszcze za życia Hamleta-ojca. ",
            zdjecie: "/Hamlet/Gartruda.jpg",
            dzwiek: "Gertruda"
        },
        {
            name: "Król Hamlet",
            opis: "Jest przedstawiony w tragedii jako „Duch”, jako że Król Hamlet został zgładzony przez brata na około miesiąc przed rozpoczęciem się akcji sztuki. Ukazuje się Hamletowi i nakazuje mu, by go pomścił. Fakt, iż zabronił Hamletowi mścić się na matce, jak i że później interweniuje w czasie dramatycznej rozmowy Hamleta z Gertrudą, a także słowa wypowiadane przez Hamleta na temat związku rodziców świadczyć mogą o głębokim uczuciu, jakie Hamlet-ojciec żywił do swej żony. Był skutecznym i zwycięskim władcą (pokonał m.in. króla Norwegii, zagarniając część jego ziem), szanowanym przez poddanych. Idealistyczny obraz, jaki pojawia się w wypowiedziach syna burzą jednak niektóre fakty: duch Hamleta-ojca cierpi męki za grzechy, o których sam zmarły król mówi jako o „kale”. Po drugie rozpasane życie dworskie, jakie krytykuje Hamlet, było tradycją, a więc zwyczaje w Elsynorze nie były zapewne lepsze za panowania króla Hamleta. ",
            zdjecie: "/Hamlet/Król.jpg",
            dzwiek: "Król"
        },
        {
            name: "Ofelia",
            opis: "Córka Poloniusza, siostra Laertesa. Obiekt młodzieńczych wyznań miłosnych Hamleta, które wyraźnie były po jej myśli. Poloniusz jednak zakazuje córce kontaktów z Hamletem, bojąc się o jej – a zapewne i o swoje – dobre imię. Brat również ostrzega Ofelię przed wiązaniem się z synem królewskim wskazując, że nawet jeżeli wyznania Hamleta są szczere, to nie może on – jako następca tronu – dowolnie wybierać sobie towarzyszki życia. W świetle wypowiedzi królowej podczas pogrzebu Ofelii, ich obawy są nieuzasadnione. Odtrącona przez Hamleta – nie jest do końca pewne z jakiego powodu – być może jako część planowego szaleństwa, może z powodu nienawiści do płci pięknej, wywołanej postępowaniem matki, a może także częściowo dlatego, iż Hamlet uznał, że jest ona manipulowana przez ojca. Po śmierci Poloniusza popada w obłęd i tonie. Z powodu wątpliwości, czy nie było to samobójstwo, nie może być pochowana z pełnym obrządkiem. Niewinna, łagodna i kruchej konstrukcji psychicznej Ofelia może być postrzegana jako antyteza Królowej Gertrudy. ",
            zdjecie: "/Hamlet/Ofelia.jpg",
            dzwiek: "Ofelia"
        },
        {
            name: "Poloniusz",
            opis: "Ojciec Laertesa i Ofelii. Kanclerz królewski. Intrygant, czego dowodem może być to, że po wyjeździe syna do Paryża wysyła sługę, by go śledził. To on także organizuje spotkanie Hamleta z Ofelią i jest pomysłodawcą fatalnego w skutkach spotkania Hamleta z Gertrudą, podczas którego zdradza swoją obecność i ginie (aczkolwiek, jak się wydaje, Hamlet zabił go, gdyż myślał, że za kotarą schowany jest Klaudiusz). Poloniusz był przedmiotem dość obcesowych drwin Hamleta, który naśmiewał się z jego służalczości i czołobitności. Po śmierci Poloniusza jego funkcje przejmuje Ozryk – także on staje się obiektem drwin Hamleta. ",
            zdjecie: "/Hamlet/polonius.jpg",
            dzwiek: "Poloniusz"
        },
        {
            name: "Laertes",
            opis: "Syn Poloniusza, brat Ofelii. Młodzian porywczy i zdecydowany. Dobry szermierz, przebywający na stałe we Francji (do Danii przybył jedynie na pogrzeb Hamleta – ojca i ślub Klaudiusza z Gertrudą oraz na wieść o śmierci ojca). O jego zdolnościach, jak i porywczej naturze świadczy rebelia, jaką wywołał po śmierci Poloniusza. Klaudiusz rebelię tę o mały włos przypłaciłby życiem. Laertes wielkim uczuciem darzy siostrę, tym bardziej rośnie w nim nienawiść do Hamleta i żądza zemsty. Twardo stąpa po ziemi (np. zdaje sobie doskonale sprawę ze społecznych przeszkód związku Ofelii i Hamleta). Wielką rysą na postaci Laertesa jest na pewno zdrada, jaką uknuł wspólnie z Klaudiuszem. To w końcu sam Laertes wpada na pomysł zatrucia ostrza. ",
            zdjecie: "/Hamlet/Laertes.jpg",
            dzwiek: "Laertes"
        },
        {
            name: "Horace",
            opis: "Filozof z Wittenbergi, przyjaciel Hamleta. Jedyna postać zajmująca więcej miejsca w dramacie, która nie ginie, chociaż chce popełnić samobójstwo nad umierającym Hamletem. To z nim książę dzieli się swoimi planami zemsty i to jego na chwilę przed śmiercią prosi, by opowiedział światu o jego historii. Horacy jest zewnętrznym, obiektywnym obserwatorem wydarzeń. ",
            zdjecie: "/Hamlet/Horace.jpg",
            dzwiek: "Horace"
        },
        {
            name: "Rosencrantz i Guildenstern",
            opis: "drugoplanowe postaci dramatu. Szkolni przyjaciele Hamleta, którzy wezwani zostają przez parę królewską wierzącą, że książę otworzy się przed nimi, a może też ich obecność i towarzystwo pozytywnie wpłyną na stan ducha Hamleta. Mają więc być szpiegami. Zostają też wyznaczeni do roli znacznie gorszej: mają eskortować Hamleta w drodze do Anglii na pewną – jak się wydawało – śmierć. Zapewne nic nie wiedzieli o tym, co było w zalakowanych listach Klaudiusza. Jednak Hamlet, gardząc dawnymi przyjaciółmi z powodu ich służalczości i prób szpiegowania go na rozkaz Króla, nie waha się ani chwili, gdy fałszuje list, skazując ich w ten sposób na pewną śmierć. ",
            zdjecie: "/Hamlet/dwuch.jpg",
            dzwiek: "dwuch"
        },
        {
            name: "Fortynbras",
            opis: "Królewicz norweski. Trudno byłoby go nawet nazwać drugoplanowym bohaterem dramatu (pojawia się osobiście tylko dwukrotnie i to na krótko), gdyby nie to, że pełni w dramacie ważną funkcję. Po pierwsze zdecydowany, dumny i wojowniczy Fortynbras stanowi w pewnym stopniu antytezę Hamleta – filozofa i moralisty. Zestawiając poczynania Fortynbrasa i swoje Hamlet tym wyraźniej widzi swoją słabość i nieumiejętność wykonania swej powinności. To właśnie Fortynbrasa w swej ostatniej woli wskazał na nowego władcę Danii. Może on być szansą na pozytywną przyszłość po ogromie zła i tragedii, jakie przez kilka miesięcy miały miejsce w Elsynorze. Niektórzy [kto?] jednak interpretują ostatnią scenę dramatu jako ostateczne zwycięstwo stąpającego twardo po ziemi materialisty, jakim jest Fortynbras, nad idealistą Hamletem; w tym kontekście Norweg może być uznawany za przedstawiciela złej strony pokonującej dobrą. Interpretacji takiej dokonał Zbigniew Herbert w swoim wierszu Tren Fortynbrasa, w którym zasugerował, iż nowy władca Danii będzie sprawował rządy żelazną ręką. ",
            zdjecie: "/Hamlet/Fortynbras.jpg",
            dzwiek: "Fortynbras"
        }
    ];
    const graj=(audio:string)=>{
        const dzwiek=document.getElementById(audio) as HTMLAudioElement;
        if(dzwiek.paused) {dzwiek.currentTime=0; dzwiek.play();}
        else dzwiek.pause();
    }
    const stop=(audio:string)=>{
        const dzwiek=document.getElementById(audio) as HTMLAudioElement;
        dzwiek.pause();
    }
    const koniec=()=>{
        const dzwieki=document.querySelectorAll<HTMLAudioElement>(".dzwieki");
        dzwieki.forEach(audio=>audio.pause());
        setPostac(0);
    }
  return (
    <div id='Postacie' className='w-full animate-pojawianie delay-0 opacity-0 flex justify-center items-center h-full inset-0 hide bg-linear-to-b from-[#1a2a4a] via-[#2d4a6e] to-[#7a9ab8] absolute overflow-hidden'>
        
        <div style={{background: "url('/Hamlet/CloudsLeft.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full z-6 animate-wPrawo -translate-x-full absolute object-cover object-center'>
        <div style={{background: "url('/Hamlet/CloudsRight.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full z-6 animate-wLewo translate-x-[200%] absolute object-cover object-center'>
        <div style={{background: "url('/Hamlet/moon.png')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full h-full opacity-0 animate-pojawianie duration-4000 delay-4000 z-6  absolute -translate-x-1.25 object-cover object-center'>
        <div style={{background: "url('/Hamlet/Cementary.jpg')", backgroundSize: "cover", backgroundPosition: "center"}} className='w-full animate-pojawianie duration-4000 delay-4500 opacity-0 h-full z-5 absolute object-cover object-center overflow-x-hidden overflow-y-scroll'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center relative opacity-0 animate-pojawianie delay-5500 z-10 md:gap-5 gap-3 lg:gap-8 max-w-[80%] my-[10%] mx-auto w-full'>
            {postacie.map((item, index)=>(
                <div key={index} className='w-full h-full flex justify-center'>
                    <div className='w-[80%] cursor-pointer relative aspect-7/8' onClick={()=>{setPostac(index+1)}} style={{background: "url('/Hamlet/tombstone.png')", backgroundSize: "cover", backgroundPosition: "center", containerType: "inline-size"}}>
                    <p className='absolute w-[50%] left-[50%] top-[43%] font-playfair translate-x-[-50%] text-shadow-sm text-shadow-black translate-y-[-43%]' style={{fontSize: "8cqi"}}>{item.name}</p>
                </div>
                {postac===index+1&&(
                    <div className='z-30 aspect-9/6 max-w-[90%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' style={{background: "url('/Hamlet/UI.png')", backgroundSize: "cover", backgroundPosition: "center", containerType: "inline-size", width: "min(160vw, 120vh)"}}>
                    <div className='absolute left-[2%] top-[8%] border-2 hover:bg-black rounded-[25%] duration-300 w-[5%] flex justify-center items-center font-black aspect-square cursor-pointer bg-[rgba(0,0,0,0.5)]' onClick={()=>{setPostac(0); stop(item.dzwiek)}} style={{fontSize: "2cqi"}}>X</div>
                    <img src={item.zdjecie} className='w-[30%] object-cover object-center rounded-2xl aspect-9/7 absolute right-[10%] top-[20%]' alt="" />
                    <img src="/Hamlet/button.png" onClick={()=>graj(item.dzwiek)} className='w-[10%] hover:-translate-y-1 duration-300 rounded-[50%] bg-[rgba(104,87,87,0.3)] absolute right-[22%] cursor-pointer bottom-[24%]' alt="" />
                    <div className='w-[50%] p-5 h-[70%] top-[50%] text-shadow-sm text-shadow-black left-[10%] overflow-scroll absolute translate-y-[-50%] font-playfair'>
                        <h1 className='font-bold' style={{fontSize: '7cqi'}}>{item.name}</h1>
                        <p className='mt-5' style={{fontSize: "2cqi"}}>{item.opis}</p>
                    </div>
                </div>
                )}
                </div>
            ))}
            </div>
            </div>
            </div>
            </div>
            </div>
    <Powrot onPowrot={koniec} id='Postacie'/>
    <audio className='dzwieki' id='Ham' src="/Hamlet/Ham.mp3"></audio>
    <audio className='dzwieki' id='Klaudiusz' src="/Hamlet/Klaudiusz.mp3"></audio>
    <audio className='dzwieki' id='Gertruda' src="/Hamlet/Gertruda.mp3"></audio>
    <audio className='dzwieki' id='Król' src="/Hamlet/Król.mp3"></audio>
    <audio className='dzwieki' id='Ofelia' src="/Hamlet/Ofelia.mp3"></audio>
    <audio className='dzwieki' id='Poloniusz' src="/Hamlet/Poloniusz.mp3"></audio>
    <audio className='dzwieki' id='Laertes' src="/Hamlet/Laertes.mp3"></audio>
    <audio className='dzwieki' id='Horace' src="/Hamlet/Horace.mp3"></audio>
    <audio className='dzwieki' id='dwuch' src="/Hamlet/dwuch.mp3"></audio>
    <audio className='dzwieki' id='Fortynbras' src="/Hamlet/Fortynbras.mp3"></audio>
    </div>
  )
}

export default Postacie