import React from 'react';
import { motion } from 'framer-motion';
import ToolCard from '@/components/ToolCard';
import { MessageSquare, Search, Workflow } from 'lucide-react';

const tools = [
  {
    id: 'openwebui',
    name: 'OpenWebUI',
    description: 'Advanced conversational AI interface with powerful language models. Experience next-generation chat capabilities with customizable AI assistants.',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'neon-glow',
    subdomain: 'https://openwebui.example.com',
    features: ['Multi-model Support', 'Custom Prompts', 'Real-time Chat']
  },
  {
    id: 'searxng',
    name: 'SearXNG',
    description: 'Privacy-focused metasearch engine that aggregates results from multiple sources without tracking. Search the web with complete anonymity.',
    icon: Search,
    color: 'from-purple-500 to-pink-500',
    glowColor: 'neon-glow-purple',
    subdomain: 'https://searxng.example.com',
    features: ['Privacy First', 'No Tracking', 'Multiple Sources']
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Powerful workflow automation platform that connects your favorite tools and services. Build complex automations with an intuitive visual interface.',
    icon: Workflow,
    color: 'from-pink-500 to-orange-500',
    glowColor: 'neon-glow-pink',
    subdomain: 'https://n8n.example.com',
    features: ['Visual Workflows', '200+ Integrations', 'Self-hosted']
  }
];

const ToolsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Explore Our Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover powerful applications designed to enhance your productivity and unlock new possibilities in AI and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground">
            More innovative tools coming soon...
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;