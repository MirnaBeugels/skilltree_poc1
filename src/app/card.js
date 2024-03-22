import * as React from "react"
import styles from "./styles.module.css";
import Image from 'next/image';
import Ster from "./ster";

function Card( { laag, uitkomst, kleur1, kleur2, kleur3, kleur4, afbeelding, breedte, hoogte, status} ) {
  return (

    <div className={styles.card}>
                <div className={styles.architectuur}>{laag}</div>
                <div className={styles.flipIcon}>
                <Image className={styles.flipIconIcon}
                      src="/flip.svg"
                      width={45.45}
                      height={45}
                      alt="Click here to flip the card"
                      />
                </div>
                <div className={styles.leeruitkomst}>{uitkomst}</div>
                <div className={styles.beoordeling}>
                  <Ster className={`${styles[kleur1]}`}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={`${styles[kleur2]}`}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={`${styles[kleur3]}`}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                  <Ster className={`${styles[kleur4]}`}
                      src="/ster.svg"
                      width={22}
                      height={22}
                      alt="Orienting"
                      />
                </div>
                <div className={styles.groei}>
                  <Image className={styles.plantje}
                        src={afbeelding}
                        width={breedte}
                        height={hoogte}
                        alt={status}
                        />
                </div>
          </div>
  )
}

export default Card