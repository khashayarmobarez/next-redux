'use client'

import Counter from '@/components/Counter'

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Counter />
    </div>
  );
}
