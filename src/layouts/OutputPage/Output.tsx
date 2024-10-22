export const Output = () => {
    const qAndA = {
        'What is a graph in data structures?': 'A graph is a collection of nodes, also known as vertices, connected by edges. Graphs can be directed or undirected, meaning edges either have a direction (directed) or not (undirected). They are used to represent relationships between entities.',
        'What are the key types of graphs?': `There are two main types of graphs: 
            (1) Undirected Graphs: Where edges have no direction. For example, if there’s an edge between vertices A and B, you can travel from A to B and from B to A.
            (2) Directed Graphs: Where edges have directions. For instance, if there’s an edge from vertex A to vertex B, you can only travel from A to B, not vice versa. `,
        'How are graphs represented in memory?': `Graphs can be represented using:
            (1) Adjacency Matrix: A 2D array where the presence of an edge between two vertices is indicated by a 1, and the absence by a 0.
            (2) Adjacency List: A list where each vertex has a list of other vertices it’s connected to. This is more space-efficient for sparse graphs.`,
        'What are the time complexities for common graph algorithms?': `(1) Depth-First Search (DFS): O(V + E) where V is the number of vertices and E is the number of edges.
            (2) Breadth-First Search (BFS): O(V + E).
            (3) Dijkstra’s Algorithm (Shortest Path): O(V^2) for an adjacency matrix, O((V + E) log V) for a priority queue.`,
    }
    const transcript = `Welcome to today’s lecture on graph algorithms. Today, we'll explore the structure of graphs, how we can represent them in code, and some common algorithms used to traverse and search graphs.
        First, let's define a graph. A graph consists of a set of vertices (also called nodes) and edges that connect these vertices. Graphs can be directed or undirected, where the direction of the edges matters only in the case of directed graphs. We also classify graphs as weighted if the edges carry a weight or cost.
        For representing graphs in memory, two popular methods are adjacency lists and adjacency matrices. An adjacency matrix is a 2D array where each element at index (i, j) represents whether there's an edge between vertex i and vertex j. An adjacency list, on the other hand, is a more space-efficient method, especially for sparse graphs, where each vertex maintains a list of adjacent vertices.
        Now, moving to graph traversal, we have two fundamental algorithms:
        Breadth-First Search (BFS): BFS explores all neighbors of a vertex before moving to the next level of neighbors. It’s great for finding the shortest path in an unweighted graph.
        Depth-First Search (DFS): DFS goes deep into a graph, exploring as far down a branch as possible before backtracking.
        Let’s move on to some advanced graph algorithms. One key algorithm is Dijkstra’s Algorithm, which helps us find the shortest path between two nodes in a weighted graph. We'll explore how to implement this with both an adjacency list and a priority queue to improve time complexity.`

    const notes = {
        'Graph Definition': `A graph G is a pair of sets (V, E), where V is a set of vertices and E is a set of edges, which
            can be directed or undirected, and weighted or unweighted.`,
        'Graph Representations': `(1) Adjacency Matrix: A matrix of size VxV (where V is the number of vertices), typically used when the graph is dense.
                (2)Adjacency List: An array of lists where each index represents a vertex, 
                and the corresponding list contains the connected vertices. More efficient for sparse graphs.`,
        'Graph Traversal Algorithms': `(1) BFS (Breadth-First Search): Traverses a graph level by level. 
                            Best for finding the shortest path in an unweighted graph. Time complexity: O(V + E).
                            (2) DFS (Depth-First Search): Explores each branch fully before backtracking. 
                            Useful for cycle detection and connected components. Time complexity: O(V + E).`,
        'Graph Search Applications': `(1) Shortest Path Problem: Finding the shortest path between two vertices in a weighted graph.
            (2) Cycle Detection: Check whether a graph contains any cycles.
            (3) Connected Components: DFS or BFS can be used to identify all distinct connected components in an undirected graph.`
    }

    const summary = `In this lecture, we covered the basic concepts and algorithms related to graphs, which are fundamental structures in computer science for representing various real-world problems.
                Graph Basics: A graph is a collection of vertices connected by edges. Graphs can be directed, undirected, weighted, or unweighted.
                Graph Representations: (1) Adjacency Matrix: A matrix representation that is easy to understand but space-inefficient for sparse graphs. 
                (2)Adjacency List: More efficient for storing sparse graphs.
                Traversal Algorithms: (1) Breadth-First Search (BFS): Ideal for exploring all nodes at the present depth before moving to nodes at the next depth level.
                (2) Depth-First Search (DFS): Explores as far as possible along each branch before backtracking, good for connected components and cycle detection.`

    return (
        <div className="min-vh-100 bg-dark">
            <div className="container flex-grow-1 pt-3">
                <div className="col-6 offset-3">
                    <div className="card bg-dark border-white mt-3 mb-3">
                        <div className="p-3 pb-2">
                            <h3 className=" text-light fw-bold border-0">Q & A</h3>
                        </div>
                        <hr className="border-light m-0"></hr>
                        <p className=" text-light fs-5 fw-bold px-3 pt-3">Q1: {Object.entries(qAndA)[0][0]}</p>
                        <p className=" text-light px-3">A1: {Object.entries(qAndA)[0][1]}</p>
                        <p className=" text-light fs-5 fw-bold px-3">Q2: {Object.entries(qAndA)[1][0]}</p>
                        <p className=" text-light px-3">A2: {Object.entries(qAndA)[1][1]}</p>
                        <p className=" text-light fs-5 fw-bold px-3">Q3: {Object.entries(qAndA)[2][0]}</p>
                        <p className=" text-light px-3">A4: {Object.entries(qAndA)[2][1]}</p>
                        <p className=" text-light fs-5 fw-bold px-3">Q4: {Object.entries(qAndA)[3][0]}</p>
                        <p className=" text-light px-3">A4: {Object.entries(qAndA)[3][1]}</p>
                    </div>

                    <div className="card bg-dark border-white mb-3">
                        <div className="card-header">
                            <h4 className="card-title text-light fw-bold">Transcript</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-light"> {transcript} </p>
                        </div>
                    </div>

                    <div className="card bg-dark border-white mb-3">
                        <div className="p-3 pb-2">
                            <h4 className=" text-light fw-bold">Notes</h4>
                        </div>
                        <hr className="border-light m-0"></hr>
                        <p className=" text-light fs-5 fw-bold px-3 pt-3">1.{Object.entries(notes)[0][0]}</p>
                        <p className=" text-light px-3">{Object.entries(notes)[0][1]}</p>
                        <p className=" text-light fs-5 fw-bold px-3">2.{Object.entries(notes)[1][0]}</p>
                        <p className=" text-light px-3">{Object.entries(notes)[1][1]}</p>
                        <p className=" text-light fs-5 fw-bold px-3">3.{Object.entries(notes)[2][0]}</p>
                        <p className=" text-light px-3">{Object.entries(notes)[2][1]}</p>
                        <p className=" text-light fs-5 fw-bold px-3">4.{Object.entries(notes)[3][0]}</p>
                        <p className=" text-light px-3">{Object.entries(notes)[3][1]}</p>
                    </div>

                    <div className="card bg-dark border-white">
                        <div className="card-header">
                            <h4 className="card-title text-light fw-bold">Summary</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-light"> {summary} </p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-black m-3 text-light border-white fw-bold" style={{ borderWidth: '2px' }}>
                            Download as a .txt file
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}