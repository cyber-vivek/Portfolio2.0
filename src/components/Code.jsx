import React, { useEffect, useRef } from 'react'
import styles from '../styles/code.module.css';
import { HOMEPAGE_SKILLS } from '../constants/info';

const Code = () => {
    const codeRef = useRef(null);
    useEffect(() => {
        if (codeRef.current) {
            const codeContainer = codeRef.current;
            Array.from(codeContainer.children).forEach(c => {
                c.style.visibility = 'hidden';
                Array.from(c.children).forEach(cc => (cc.style.visibility = 'hidden'));
            });
            let i = 0, j = 0;
            const intv = setInterval(() => {
                if (i < codeContainer.children.length) {
                    const currentParent = codeContainer.children[i];
                    currentParent.style.visibility = '';
                    if (j < currentParent.children.length) {
                        currentParent.children[j++].style.visibility = '';
                    } else {
                        j = 0;
                        i++;
                    }
                } else {
                    clearInterval(intv);
                }
            }, 100);
            return () => clearInterval(intv);
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.dot_container}>
                <div className={styles.dot_content}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            
            <div className={styles.code_wrapper}>
                <code ref={codeRef} className={styles.code}>
                    <div    >
                        <span className={styles.keyword}>const</span>
                        <span className={styles.text}>developer</span>
                        <span className={styles.keyword}>=</span>
                        <span className={styles.symbol}>{"{"}</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_1} ${styles.text}`}>name:</span>
                        <span className={styles.symbol}>'</span>
                        <span className={styles.string}>Vivek </span>
                        <span className={styles.string}>Kumar </span>
                        <span className={styles.string}>Verma</span>
                        <span className={styles.symbol}>',</span>
                    </div>

                    <div className={styles.indent_1}>
                        <span className={styles.text}>skills:</span>
                        <span className={styles.symbol}>['</span>
                        {
                            HOMEPAGE_SKILLS.map((skill, i) => 
                                <>
                                    <span className={styles.string}>{skill}</span>
                                    <span className={styles.symbol}>'{i === HOMEPAGE_SKILLS.length -1 ? "" : ", '"}</span>
                                </>
                            )
                        }
                        {/* <span className={styles.string}>React</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>NextJS</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>Angular</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>Redux</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>NodeJs</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>Express</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>MySQL</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>MongoDB</span>
                        <span className={styles.symbol}>', '</span>
                        <span className={styles.string}>Docker</span>
                        <span className={styles.symbol}>', '</span> */}
                        <span className={styles.symbol}>],</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_1} ${styles.text}`}>hardWorker:</span>
                        <span className={styles.boolean}>true</span>
                        <span className={styles.symbol}>,</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_1} ${styles.text}`}>quickLearner:</span>
                        <span className={styles.boolean}>true</span>
                        <span className={styles.symbol}>,</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_1} ${styles.text}`}>problemSolver:</span>
                        <span className={styles.boolean}>true</span>
                        <span className={styles.symbol}>,</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_1} ${styles.method}`}>isTechSavvy:</span>
                        <span className={styles.boolean}>function</span>
                        <span className={styles.symbol}>{"() {"}</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_2} ${styles.boolean}`}>return</span>
                        <span className={styles.symbol}>(</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_3} ${styles.this}`}>this.</span>
                        <span className={styles.text}>hardWorker</span>
                        <span className={styles.operator}>&&</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_3} ${styles.this}`}>this.</span>
                        <span className={styles.text}>problemSolver</span>
                        <span className={styles.operator}>&&</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_3} ${styles.this}`}>this.</span>
                        <span className={styles.text}>skills.length</span>
                        {/* <span className={styles.operator}>&gt;=</span>
                        <span className={styles.boolean}>5</span> */}
                    </div>

                    <div>
                        <span className={`${styles.indent_2} ${styles.symbol}`}>{");"}</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_1} ${styles.symbol}`}>{"};"}</span>
                    </div>

                    <div>
                        <span className={styles.symbol}>{"};"}</span>
                    </div>
                </code>
            </div>

        </div>
    )
}

export default Code