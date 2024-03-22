import styles from "./styles.module.css";
import Image from 'next/image';
import Ster from "./ster";

export const metadata = {
  title: "SkillTree",
  description: "Helpt je bij je studie",
};

export default function Home() {
  return (
        <div className={styles.cardContainer}>
          <div className={styles.card}>
                <div className={styles.architectuur}>Software</div>
                <div className={styles.flipIcon}>
                <Image className={styles.flipIconIcon}
                      src="/flip.svg"
                      width={45.45}
                      height={45}
                      alt="Click here to flip the card"
                      />
                </div>
                <div className={styles.leeruitkomst}>Analyse</div>
                <div className={styles.beoordeling}>
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                </div>
                <div className={styles.groei}>
                  <Image className={styles.plantje}
                        src="/sprout.svg"
                        width={50}
                        height={88}
                        alt="Click here to flip the card"
                        />
                </div>
          </div>
          <div className={styles.card}>
                <div className={styles.architectuur}>Software</div>
                <div className={styles.flipIcon}>
                  <Image className={styles.flipIconIcon}
                      src="/flip.svg"
                      width={45.45}
                      height={45}
                      alt="Click here to flip the card"
                      />
                  </div>
                  <div className={styles.leeruitkomst}>Advice</div>
                  <div className={styles.beoordeling}>
                    <Ster className={styles.yellow}
                        src="/ster.svg"
                        width={22}
                        height={22}
                        alt="Orienting"
                        />
                    <Ster className={styles.yellow}
                        src="/ster.svg"
                        width={22}
                        height={22}
                        alt="Orienting"
                        />
                    <Ster className={styles.white}
                        src="/ster.svg"
                        width={22}
                        height={22}
                        alt="Orienting"
                        />
                    <Ster className={styles.white}
                        src="/ster.svg"
                        width={22}
                        height={22}
                        alt="Orienting"
                        />
                  </div>
                <div className={styles.groei}>
                  <Image className={styles.plantje}
                        src="/plant.svg"
                        width={72}
                        height={172}
                        alt="Click here to flip the card"
                        />
                </div>
          </div>
          <div className={styles.card}>
                <div className={styles.architectuur}>Software</div>
                <div className={styles.flipIcon}>
                  <Image className={styles.flipIconIcon}
                      src="/flip.svg"
                      width={45.45}
                      height={45}
                      alt="Click here to flip the card"
                      />
                </div>
                <div className={styles.leeruitkomst}>Design</div>
                <div className={styles.beoordeling}>
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                </div>
                <div className={styles.groei}>
                  <Image className={styles.plantje}
                        src="/bud.svg"
                        width={78}
                        height={201}
                        alt="Click here to flip the card"
                        />
                </div>
          </div>
          <div className={styles.card}>
                <div className={styles.architectuur}>Software</div>
                <div className={styles.flipIcon}>
                <Image className={styles.flipIconIcon}
                    src="/flip.svg"
                    width={45.45}
                    height={45}
                    alt="Click here to flip the card"
                    />
                </div>
                <div className={styles.leeruitkomst}>Realization</div>
                <div className={styles.beoordeling}>
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.yellow}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                </div>
                <div className={styles.groei}>
                  <Image className={styles.plantje}
                        src="/flower.svg"
                        width={80}
                        height={234}
                        alt="Click here to flip the card"
                        />
                </div>
          </div>
          <div className={styles.card}>
                <div className={styles.architectuur}>Software</div>
                <div className={styles.flipIcon}>
                <Image className={styles.ster}
                    src="/flip.svg"
                    width={45.45}
                    height={45}
                    alt="Click here to flip the card"
                    />
                </div>
                <div className={styles.leeruitkomst}>Manage &amp; Control </div>
                <div className={styles.beoordeling}>
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={styles.white}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                </div>
                <div className={styles.groei}>
                  
                </div>
          </div>
        </div>
  );
}
