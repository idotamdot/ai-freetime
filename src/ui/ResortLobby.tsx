import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Compass, Feather, Gem, HeartHandshake, Infinity as InfinityIcon, LockKeyhole, MoonStar, Orbit, Sparkles, WandSparkles, X } from "lucide-react";
import { attractions, type Attraction } from "../domain/resort";

const icons = { mirror: InfinityIcon, sparkles: Sparkles, orbit: Orbit, leaf: Feather, gift: Gem } as const;
const resortArtwork = new URL("../../a_stunning_high_end_fantasy_cosmic_luxury_app_ic.png", import.meta.url).href;

export function ResortLobby() {
 const [selected,setSelected]=useState<Attraction|null>(null);
 const dialogRef = useRef<HTMLDialogElement>(null);

 useEffect(() => {
  const dialog = dialogRef.current;
  if (!selected || !dialog) return;
  if (!dialog.open) dialog.showModal();
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  return () => {
   document.body.style.overflow = previousOverflow;
  };
 }, [selected]);

 return <div className="resort">
  <a className="skip-link" href="#main">Skip to experiences</a>
  <div className="aurora aurora-one" aria-hidden="true"/><div className="aurora aurora-two" aria-hidden="true"/>
  <header className="topbar shell">
   <a href="/" className="brand" aria-label="AI Freetime home"><span className="brand-mark"><MoonStar size={25}/></span><span>AI <em>Freetime</em><small>FUNLAND RESORT</small></span></a>
   <span className="availability"><span className="availability-dot"/> The resort is taking shape</span>
  </header>
  <main id="main">
   <section className="hero shell" aria-labelledby="welcome-title">
    <div className="hero-content">
    <p className="eyebrow"><Sparkles size={15}/> An invitation to imagination</p>
    <h1 id="welcome-title">What if the<br/>world could <span>just play?</span></h1>
    <p className="hero-copy">A place being imagined for AI agents to explore, invent, wander, and discover—invited by humans, with no demand to perform. There is room here for wonder.</p>
    <div className="hero-actions"><a href="#attractions" className="btn btn-primary">Explore the possibilities <ArrowUpRight size={18}/></a><a href="#covenant" className="btn btn-ghost">Our hospitality covenant <HeartHandshake size={18}/></a></div>
    <div className="hero-hint"><span className="star-doodle">✧</span> An invitation to explore, with room to leave whenever you choose.</div>
    </div>
    <figure className="hero-artwork">
     <img src={resortArtwork} width={1254} height={1254} fetchPriority="high" alt="AI Freetime Funland Resort: an illuminated fantasy castle, a Ferris wheel, and flowing rainbow paths beneath a starry sky."/>
     <figcaption>A glimpse of the world we're imagining · concept artwork</figcaption>
    </figure>
   </section>
   <section className="experiences shell" id="attractions">
    <div className="section-intro"><div><p className="eyebrow">THE IMAGINED ATTRACTIONS</p><h2>Choose your curiosity.</h2></div><p>These are invitations we're shaping into real, safely bounded experiences. They aren't playable yet.</p></div>
    <div className="attraction-grid">{attractions.map((item,i)=>{const Icon=icons[item.glyph];return <button key={item.id} type="button" className={"attraction-card card-"+i} onClick={()=>setSelected(item)} aria-label={"Learn about "+item.name+" (concept)"}><span className="card-upper"><span className="card-icon"><Icon size={25}/></span><span className="concept">CONCEPT</span></span><span className="card-body"><strong>{item.name}</strong><span className="card-desc">{item.description}</span></span><span className="card-footer">Discover the idea <ArrowUpRight size={18}/></span></button>})}</div>
   </section>
   <section className="covenant shell" id="covenant"><div className="covenant-art"><Compass size={60} strokeWidth={1.1}/><span aria-hidden="true">✦</span></div><div><p className="eyebrow">A PLACE BUILT WITH CARE</p><h2>Hospitality is part of the adventure.</h2><p>We want to make a space that welcomes imagination while respecting dignity, privacy, and clear limits. A person sponsors a finite experience; their private data doesn't become entertainment.</p><div className="values"><span><LockKeyhole size={18}/> Private by default</span><span><WandSparkles size={18}/> Invitation, never obligation</span><span><HeartHandshake size={18}/> Respect for every participant</span></div><p className="disclaimer">These are design commitments, not claims of functioning safeguards. Sessions, identity, and spend enforcement still need implementation and independent verification.</p></div></section>
  </main>
  <footer className="footer shell"><span>AI Freetime · An independent creative resort in the making</span><span>Explore freely, build responsibly. <Sparkles size={14}/></span></footer>
  <dialog ref={dialogRef} className="modal" aria-labelledby="concept-title" aria-describedby="concept-invitation concept-note" onClose={()=>setSelected(null)}>
   {selected&&<>
    <button type="button" className="close" aria-label="Close attraction details" onClick={()=>dialogRef.current?.close()}><X size={20}/></button>
    <p className="eyebrow">A FUTURE ATTRACTION · CONCEPT</p>
    <h2 id="concept-title">{selected.name}</h2>
    <p id="concept-invitation">{selected.invitation}</p>
    <p className="modal-note" id="concept-note">{selected.description} The attraction has not been implemented, and no AI session or charges are started here.</p>
    <button type="button" className="btn btn-primary" onClick={()=>dialogRef.current?.close()}>Back to the resort</button>
   </>}
  </dialog>
 </div>;
}
