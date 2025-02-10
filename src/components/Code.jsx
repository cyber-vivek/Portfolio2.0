import React from 'react'
import styles from '../styles/code.module.css';

const Code = () => {
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
                <code className={styles.code}>
                    <div className={styles.blink}>
                        <span className={styles.keyword}>const</span>
                        <span className={styles.text}>coder</span>
                        <span className={styles.keyword}>=</span>
                        <span className={styles.symbol}>{"{"}</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_1} ${styles.text}`}>name:</span>
                        <span className={styles.symbol}>'</span>
                        <span className={styles.string}>Vivek</span>
                        <span className={styles.symbol}>' ,</span>
                    </div>

                    <div className={styles.indent_1}>
                        <span className={styles.text}>skills:</span>
                        <span className={styles.symbol}>['</span>
                        <span className={styles.string}>React</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>NextJS</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>Redux</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>Express</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>NestJS</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>MySql</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>MongoDB</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>Docker</span>
                        <span className={styles.symbol}>, '</span>
                        <span className={styles.string}>AWS</span>
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
                        <span className={`${styles.indent_1} ${styles.method}`}>hireable:</span>
                        <span className={styles.boolean}>function</span>
                        <span className={styles.symbol}>{"() {"}</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_2} ${styles.boolean}`}>return</span>
                        <span className={styles.symbol}>(</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_2} ${styles.this}`}>this.</span>
                        <span className={styles.text}>hardWorker</span>
                        <span className={styles.operator}>&&</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_2} ${styles.this}`}>this.</span>
                        <span className={styles.text}>problemSolver</span>
                        <span className={styles.operator}>&&</span>
                    </div>

                    <div>
                        <span className={`${styles.indent_2} ${styles.this}`}>this.</span>
                        <span className={styles.text}>skills.length</span>
                        <span className={styles.operator}>&gt;=</span>
                        <span className={styles.boolean}>5</span>
                    </div>

                    <div>
                        <span className={styles.indent_2}>{");"}</span>
                    </div>

                    <div>
                        <span className={styles.indent_1}>{"};"}</span>
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