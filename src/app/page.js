import styles from "./styles.module.css";
import Image from 'next/image';
import Ster from "./ster";
import Card from "./card";

export const metadata = {
  title: "SkillTree",
  description: "Helpt je je volgende leerdoel te halen",
};

const sprout = "/sprout.svg";
const plant = "/plant.svg"; 
const bud = "/bud.svg"; 
const flower = "/flower.svg";

const sproutBreedte = 50; 
const sproutHoogte = 88;
const plantBreedte = 72; 
const plantHoogte = 172; 
const budBreedte = 78; 
const budHoogte = 201;
const flowerBreedte = 80; 
const flowerHoogte = 234; 

const orienting = "Orienting";
const beginning = "Beginning";
const proficient = "Proficient";
const advanced = "Advanced";

export default function Home() {
  return (
        <div className={styles.cardContainer}>
          <Card 
            kleur1="yellow"
            kleur2="white"
            kleur3="white"
            kleur4="white"
            laag="software"
            uitkomst="analyse"
            afbeelding={`${sprout}`}
            breedte={sproutBreedte}
            hoogte={sproutHoogte}
            status={orienting}
            />
          <Card 
            kleur1="yellow"
            kleur2="yellow"
            kleur3="white"
            kleur4="white"
            laag="software"
            uitkomst="advice"
            afbeelding={`${plant}`} 
            breedte={plantBreedte}
            hoogte={plantHoogte}
            status={beginning}
            />
          <Card 
            kleur1="yellow"
            kleur2="yellow"
            kleur3="yellow"
            kleur4="white"
            laag="software"
            uitkomst="design"
            afbeelding={`${bud}`}
            breedte={budBreedte}
            hoogte={budHoogte}
            status={proficient}
            />
          <Card 
            kleur1="yellow"
            kleur2="yellow"
            kleur3="yellow"
            kleur4="yellow"
            laag="software"
            uitkomst="realization"
            afbeelding={`${flower}`}
            breedte={flowerBreedte}
            hoogte={flowerHoogte}
            status={advanced}
            />
          <Card 
            kleur1="yellow"
            kleur2="yellow"
            kleur3="yellow"
            kleur4="yellow"
            laag="software"
            uitkomst="manage &amp; control"
            afbeelding={`${sprout}`} 
            breedte={sproutBreedte}
            hoogte={sproutHoogte}
            status={orienting}
            />
        </div>
  );
}
