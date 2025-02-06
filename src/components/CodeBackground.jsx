const CodeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-10 dark:opacity-20">
      <pre className="text-xs sm:text-sm md:text-base overflow-hidden whitespace-pre-wrap break-words text-black dark:text-white font-mono">
        {`
function optimizeCode(code) {
  // Remove comments
  code = code.replace(/\\/\\*[\\s\\S]*?\\*\\/|([^\\\\:]|^)\\/\\/.*$/gm, '$1');
  
  // Remove whitespace
  code = code.replace(/\\s+/g, ' ');
  
  // Remove semicolons before closing curly braces
  code = code.replace(/;\\s*}/g, '}');
  
  return code;
}

class Algorithm {
  constructor(name) {
    this.name = name;
  }
  
  execute(input) {
    console.log(\`Executing \${this.name} algorithm\`);
    // Algorithm implementation
  }
}

const algorithms = [
  new Algorithm("Quick Sort"),
  new Algorithm("Binary Search"),
  new Algorithm("Depth-First Search")
];

algorithms.forEach(algo => algo.execute("sample input"));

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const result = fetchData('https://api.example.com/data');

// React component example
function App() {
  const [state, setState] = React.useState(initialState);
  
  React.useEffect(() => {
    // Side effect
  }, [dependencies]);
  
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my portfolio</p>
    </div>
  );
}

export default App;
        `.repeat(10)}
      </pre>
    </div>
  );
};

export default CodeBackground;
