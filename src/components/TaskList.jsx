import { db } from "../firebase";
import AddTask from "./AddTask";
import SignOut from "./SignOut";
import TaskItem from "./TaskItem";
import { collection, doc, getDocs, deleteDoc, addDoc, updateDoc, getDoc } from "firebase/firestore";


function NewTaskList() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const collectionRef = collection(db, 'tasks')
        const querySnapshot = await getDocs(collectionRef);
        const tasks = querySnapshot.docs.map((task) => ({
            id: task.id,
            ...task.data()
        }))    
        setTasks(tasks)
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <AddTask />

            <div className="flex justify-between items-center"> {/* NAV BAR */}
                <h3 className="text-[#ffffffdd] font-Raleway text-[20px] px-[10px] py-[10px]">
                    Your Tasks
                </h3>
                <div className="mr-[10px]">
                    <SignOut />
                </div>
            </div>

            <div className="grid grid-cols-4">
                <TaskItem title='sample title' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, qui.' status='pending' />
            </div>
        </>
    )
}

export default NewTaskList;