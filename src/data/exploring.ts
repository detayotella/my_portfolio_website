/**
 * "Currently Exploring" · the lab notebook.
 * Topics reflect what is actively being studied, not claims of mastery.
 */

export interface ExploringTopic {
  name: string;
  note: string;
}

export interface ExploringColumn {
  title: string;
  path: string;
  topics: ExploringTopic[];
  footnote?: string;
}

export const exploringColumns: ExploringColumn[] = [
  {
    title: 'transformers & nlp',
    path: '~/research/ai-ml',
    topics: [
      { name: 'Transformer architecture', note: 'embeddings, positional encoding, encoder-decoder flow' },
      { name: 'Self-attention', note: 'queries, keys, and values; why context gets weighted' },
      { name: 'Attention computation', note: 'softmax(QKᵀ/√dₖ)V, from dot products to distributions' },
      { name: 'NLP', note: 'tokenization, language modeling, text generation' },
      { name: 'RAG system design', note: 'chunking, embedding, retrieval, grounding' },
      { name: 'LLM evaluation', note: 'llm-as-judge with structured scoring' },
      { name: 'Representation learning', note: 'what intermediate layers actually learn' },
    ],
    footnote: 'Attention(Q, K, V) = softmax(QKᵀ / √dₖ) · V',
  },
  {
    title: 'ml systems & vision',
    path: '~/research/mlsys-cv',
    topics: [
      { name: 'Computer vision', note: 'image classification as the first deep task' },
      { name: 'Convolutional networks', note: 'conv, ReLU, pooling, classifier heads' },
      { name: 'Training pipelines', note: 'data loading, transforms, epochs, checkpoints' },
      { name: 'Reproducibility', note: 'seeds, lockfiles, uv-managed environments' },
      { name: 'Local inference', note: 'cpu-only training, on-device embeddings' },
      { name: 'Vector databases', note: 'chroma, similarity search, metadata' },
    ],
    footnote: '// torch cpu-only · embeddings via all-MiniLM-L6-v2',
  },
  {
    title: 'software engineering',
    path: '~/research/swe',
    topics: [
      { name: 'Backend architecture', note: 'layering, boundaries, services' },
      { name: 'Microservices', note: 'gateway, identity, posts, media, search' },
      { name: 'Event-driven systems', note: 'rabbitmq topics like post.created' },
      { name: 'API design', note: 'REST done deliberately, not accidentally' },
      { name: 'Databases', note: 'postgres, mongodb, schemas, migrations' },
      { name: 'Rust', note: 'ownership as a type system' },
      { name: 'Docker', note: 'containerized, compose-run systems' },
    ],
  },
];
