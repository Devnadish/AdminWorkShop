import { createEdgeStoreProvider } from '@edgestore/react'; // Example import path

// If `EdgeStoreRouter` type is needed, ensure it's defined appropriately for JavaScript usage

const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider<EdgeStoreRouter>();

export { EdgeStoreProvider, useEdgeStore };
