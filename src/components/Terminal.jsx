import React, { useState, useRef, useEffect, use } from 'react';
import styles from '../styles/Terminal.module.css';

const FloatingTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Vivek\'s Portfolio Terminal!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' }
  ]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setIsOpen(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const [currentPath, setCurrentPath] = useState('~/portfolio');
  
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const commands = {
    help: {
      description: 'Show available commands',
      execute: () => [
        'Available commands:',
        '  help          - Show this help message',
        '  about         - Display information about Vivek',
        '  skills        - Show technical skills',
        '  experience    - Display work experience',
        '  projects      - List portfolio projects',
        '  contact       - Show contact information',
        '  clear         - Clear terminal screen',
        '  whoami        - Display current user',
        '  pwd           - Print working directory',
        '  ls            - List directory contents',
        '  cat <file>    - Display file contents',
        '  echo <text>   - Echo text to terminal',
        '  date          - Show current date and time',
        '  version       - Show portfolio version',
        '  close         - Close terminal window'
      ]
    },
    about: {
      description: 'Display information about Vivek',
      execute: () => [
        'Name: Vivek Kumar Verma',
        'Role: Software Developer',
        'Location: India',
        'Education: IIT BHU (Mechanical Engineering)',
        'Passion: Solving complex problems and exploring new technologies',
        'Status: Available for opportunities'
      ]
    },
    skills: {
      description: 'Show technical skills',
      execute: () => [
        'Frontend: React, Redux, Angular, TypeScript, JavaScript, Tailwind CSS',
        'Backend: Node.js, Express, Django, Redis, Kafka, SQS',
        'Database: MongoDB, MySQL',
        'Tools: Git, Docker, Shell Scripting',
        'Other: Data Structures, Algorithms, OOPs, Operating Systems'
      ]
    },
    experience: {
      description: 'Display work experience',
      execute: () => [
        'Software Developer at Edfora (June 2023 - Present)',
        '  - Improved CMS application loading by 40% using React optimizations',
        '  - Built test engine for 10,000+ students with proctoring features',
        '  - Implemented modular approach reducing development time by 30%',
        '',
        'Software Developer Intern at Northern Trust (June-August 2022)',
        '  - Developed Blockchain explorer using React and Node.js',
        '  - Implemented API gateway with Redux for state management',
        '  - Created advanced filters saving time for 1000+ clients'
      ]
    },
    projects: {
      description: 'List portfolio projects',
      execute: () => [
        '1. My Vocab - Full stack vocabulary app with daily reminders',
        '2. Chat Space - Real-time chat application with notifications',
        '3. Blog App - Django-based blog with Azure integration',
        '4. AI News Assistant - Voice-powered news app using AlanAI',
        '5. Entertainment Hub - Movie/TV series discovery app',
        '6. Clipboard Chrome Extension - Text copy management tool',
        '7. Snake Game - Interactive game with high score tracking',
        '',
        'Type "cat projects" for detailed project information'
      ]
    },
    contact: {
      description: 'Show contact information',
      execute: () => [
        'Email: vivek.verma@example.com',
        'LinkedIn: linkedin.com/in/vivek-kumar-verma',
        'GitHub: github.com/cyber-vivek',
        'Phone: +91-XXXXXXXXXX',
        'Resume: Available on request'
      ]
    },
    clear: {
      description: 'Clear terminal screen',
      execute: () => {
        setHistory([]);
        return [];
      }
    },
    whoami: {
      description: 'Display current user',
      execute: () => ['vivek']
    },
    pwd: {
      description: 'Print working directory',
      execute: () => [currentPath]
    },
    ls: {
      description: 'List directory contents',
      execute: () => [
        'about.txt',
        'skills.txt',
        'experience.txt',
        'projects.txt',
        'contact.txt',
        'resume.pdf'
      ]
    },
    cat: {
      description: 'Display file contents',
      execute: (args) => {
        const file = args[0];
        const files = {
          'about.txt': [
            'Vivek Kumar Verma - Software Developer',
            'Passionate about solving complex problems and building innovative solutions.',
            'Quick learner with expertise in full-stack development.',
            'Always eager to explore new technologies and methodologies.'
          ],
          'skills.txt': [
            'Frontend Technologies:',
            '- React, Redux, Angular, TypeScript, JavaScript',
            '- Tailwind CSS, Bootstrap, SCSS, HTML, CSS',
            '',
            'Backend Technologies:',
            '- Node.js, Express, Django',
            '- Redis, Kafka, SQS, MongoDB, MySQL',
            '',
            'Tools & Others:',
            '- Git, Docker, Shell Scripting',
            '- Data Structures, Algorithms, OOPs'
          ],
          'experience.txt': [
            'Current Role: Software Developer at Edfora',
            'Duration: June 2023 - Present',
            'Key Achievements:',
            '- 40% improvement in application loading time',
            '- Built test engine for 10,000+ students',
            '- 30% reduction in development time through modular approach',
            '',
            'Previous: Software Developer Intern at Northern Trust',
            'Duration: June-August 2022',
            'Key Achievements:',
            '- Developed Blockchain explorer',
            '- Implemented API gateway with Redux'
          ],
          'projects.txt': [
            '1. My Vocab - Vocabulary learning app with daily reminders',
            '   Tech: Node.js, Express, MongoDB, React',
            '   Features: User auth, infinite scrolling, email reminders',
            '',
            '2. Chat Space - Real-time chat application',
            '   Tech: Node.js, Express, MongoDB, React, Socket.io',
            '   Features: Real-time messaging, notifications, chat history',
            '',
            '3. AI News Assistant - Voice-powered news app',
            '   Tech: React, AlanAI, News API',
            '   Features: Voice commands, real-time news updates'
          ],
          'contact.txt': [
            'Get in touch with Vivek:',
            'Email: vivek.verma@example.com',
            'LinkedIn: linkedin.com/in/vivek-kumar-verma',
            'GitHub: github.com/cyber-vivek',
            'Phone: +91-XXXXXXXXXX'
          ]
        };
        return files[file] || [`cat: ${file}: No such file or directory`];
      }
    },
    echo: {
      description: 'Echo text to terminal',
      execute: (args) => [args.join(' ')]
    },
    date: {
      description: 'Show current date and time',
      execute: () => [new Date().toString()]
    },
    version: {
      description: 'Show portfolio version',
      execute: () => ['Portfolio Terminal v2.0.0', 'Built with React and love ❤️']
    },
    close: {
      description: 'Close terminal window',
      execute: () => {
        setIsOpen(false);
        return ['Terminal closed. Click the terminal button to reopen.']
      }
    }
  };

  const executeCommand = (cmd) => {
    const [commandName, ...args] = cmd.trim().split(' ');
    
    if (commands[commandName]) {
      const result = commands[commandName].execute(args);
      return result;
    } else {
      return [`${commandName}: command not found. Type "help" for available commands.`];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return;

    // Add command to history
    const newHistory = [...history, { type: 'input', content: `${currentPath}$ ${command}` }];
    
    // Execute command and add output
    const output = executeCommand(command);
    const outputHistory = output.map(line => ({ type: 'output', content: line }));
    
    setHistory([...newHistory, ...outputHistory, { type: 'output', content: '' }]);
    setCommand('');
    
    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };
  const handleClose = () => {
    document.getElementById('vivek-terminal-wrapper').classList.add(styles.closeAnimation);
    setIsAnimating(true);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleTerminalClick = (e) => {
      if (containerRef.current && (containerRef.current.contains(e.target) || containerRef.current == e.target)) {
        inputRef.current && inputRef.current.focus();
      }
    };
    if (inputRef.current && isOpen) {
      inputRef.current.focus();
      document.addEventListener('click', handleTerminalClick);
    }
    if(!isOpen) {
      document.removeEventListener('click', handleTerminalClick);
    }

    return () => {
      document.removeEventListener('click', handleTerminalClick);
    };
  }, [isOpen]);

  const handleMouseDown = (e) => {
    dragging.current = true;
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging.current) {
      const newX = e.clientX - dragStart.current.x;
      const newY = e.clientY - dragStart.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      {/* Floating Terminal Button */}
      <button
        className={`${styles.terminalButton} ${isOpen ? styles.active : ''}`}
        onClick={handleToggle}
        title={isOpen ? 'Close Terminal' : 'Open Terminal'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM8 19v-6h8v6H8zm0-8V5h8v6H8z"/>
          <path d="M10 7h4v2h-4V7zm0 4h4v2h-4v-2z"/>
        </svg>
      </button>

      {isOpen && (
        <div
          ref={containerRef}
          id='vivek-terminal-wrapper'
          className={styles.terminalWrapper}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        >
          <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader} onMouseDown={handleMouseDown}>
            <div className={`${styles.terminalButtons} terminal-buttons`}>
              <button 
                className={`${styles.button} ${styles.close}`}
                onClick={handleClose}
                title="Close"
              >⨉</button>
              <button 
                className={`${styles.button} ${styles.minimize}`}
                onClick={handleClose}
                title="Minimize"
              >⎯</button>
              <button 
                className={`${styles.button} ${styles.maximize}`}
                title="Maximize"
              >⤡</button>
            </div>
            <div className={styles.terminalTitle}>Terminal - Portfolio</div>
          </div>
          <div className={styles.terminalBody} ref={terminalRef}>
            {history.map((item, index) => (
              <div key={index} className={styles.terminalLine}>
                {item.type === 'input' ? (
                  <div className={styles.inputLine}>
                    <span className={styles.prompt}>{item.content}</span>
                  </div>
                ) : (
                  <div className={styles.outputLine}>
                    {item.content}
                  </div>
                )}
              </div>
            ))}
            <form onSubmit={handleSubmit} className={styles.inputForm}>
              <span className={styles.prompt}>{currentPath}$ </span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className={styles.commandInput}
                autoFocus
              />
            </form>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingTerminal;
