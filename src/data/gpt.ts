export const mockGptCode =
  '\n' +
  '\n' +
  "import React, { useState, useEffect } from 'react';\n" +
  '\n' +
  'interface ChatGptResponse {\n' +
  '  message: string;\n' +
  '}\n' +
  '\n' +
  'const ChatGpt: React.FC = () => {\n' +
  "  const [message, setMessage] = useState<string>('');\n" +
  '  const [response, setResponse] = useState<ChatGptResponse>();\n' +
  '\n' +
  '  useEffect(() => {\n' +
  '    const fetchData = async () => {\n' +
  "      const response = await fetch('https://chatgpt.com/api/message', {\n" +
  "        method: 'POST',\n" +
  '        body: JSON.stringify({ message }),\n' +
  '        headers: {\n' +
  "          'Content-Type': 'application/json',\n" +
  '        },\n' +
  '      });\n' +
  '      const data = await response.json();\n' +
  '      setResponse(data);\n' +
  '    };\n' +
  '    fetchData();\n' +
  '  }, [message]);\n' +
  '\n' +
  '  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n' +
  '    setMessage(e.target.value);\n' +
  '  };\n' +
  '\n' +
  '  return (\n' +
  '    <div>\n' +
  '      <input type="text" value={message} onChange={handleChange} />\n' +
  '      {response && <p>{response.message}</p>}\n' +
  '    </div>\n' +
  '  );\n' +
  '};\n' +
  '\n' +
  'export default ChatGpt;';
