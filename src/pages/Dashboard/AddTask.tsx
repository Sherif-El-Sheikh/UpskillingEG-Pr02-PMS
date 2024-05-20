import MyForm from "./../../components/shared/Form/MyForm";
import Header from './../../components/shared/Header';
import { FaAngleLeft } from "react-icons/fa6";
function AddTask() {
  return (
    <>
    <div className=""><Header icon={<FaAngleLeft />} title={"View All Tasks"} mainTitle={"Add a New Task"}/></div>
      <div className="container vh-100  pt-5">
        <MyForm />
      </div>
    </>
  );
}

export default AddTask;
