import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSection, createSubSection } from "../../../services/operations/courseApi";
import { getUser } from "../../../services/operations/authApi";
import { setUserData } from "../../../slices/authSlice";
import InputTag from "../../ui/InputTag";
import { FaPlus } from "react-icons/fa6";
import Button from "../../ui/Button";

const CreateSectionSubSection = () => {
  const dispatch = useDispatch();

  const [sectionName, setSectionName] = useState("");
  const courseId = useSelector((state) => state.course.courseId);
  const handleChange = (e) => {
    setSectionName(e.target.value);
  };
  const handleCourseBuilder = async () => {
    try {
      const response = await createSection(sectionName, courseId);
      setSectionName("");
      console.log("Section creation phase", response);
      // Fetch updated user data and update Redux
      const updatedUserData = await getUser();
      dispatch(setUserData(updatedUserData));
    } catch (error) {
      console.log(error);
    }
  };

  const [showSubSectionFileUpload, setShowSubSectionFileUpload] = useState("");
  const handleShowSubSection = (id) => {
    setShowSubSectionFileUpload(id);
    console.log("elllll", id);
  };
  const userDataForSection = useSelector(
    (state) => state.auth.userData.courses
  );

  const [subSectionForm, setSubSectionForm] = useState({
    title:"",
    description:"",
    videoUrl:null,
    sectionId:""
  });

  const handleOnChnage = (e) => {
    
    const {name, value, files} = e.target;
    setSubSectionForm((prev) => ({
        ...prev,
        [name]: files? files[0] : value 
    }))
  }

  const {title, description, videoUrl, sectionId} = subSectionForm;

  const handleCreateSubSection = async (id) => {
    console.log("id", subSectionForm);
    setSubSectionForm((prev) => ({
        ...prev,
        sectionId:id
    }));
    try{
        const response = await createSubSection(title, description, videoUrl, sectionId);
        console.log("FRONT PAGE subsection creation", response);
    }catch(error){
        console.log("FRONT PAGE subsection creation error", error);
    }
  }

  return (
    <div className="bg-[#131313] p-5 border border-white/10 rounded-lg mt-7">
      <p>Course Builder</p>
      <div className="mt-8">
        <div className="flex flex-col gap-2 mb-5">
          {userDataForSection &&
            courseId &&
            userDataForSection
              .find((el) => el._id === courseId._id)
              ?.courseContent?.map((el) => (
                <div key={el._id}>
                  <div className=" p-2 rounded-lg bg-[#1b1b1b]" >
                    <div className="flex  justify-between ">
                      <p
                        className="flex justify-center items-center text-xl font-sans font-semibold 
                    first-letter:capitalize"
                      >
                        {el.sectionName}
                      </p>
                      <div className="">
                        <Button
                          onClick={() => handleShowSubSection(el._id)}
                          text="Add Sub Section"
                          classStyle={"text-sm "}
                          btn={"teritory"}
                          icon={<FaPlus />}
                        />
                      </div>
                    </div>
                    <div
                      className={`flex flex-col  w-full justify-between border mt-5 rounded-lg border-white/10 p-5 ${
                        showSubSectionFileUpload === el._id ? "block" : "hidden"
                      }`}
                    >
                        <div className="flex gap-3 mb-3">
                            <InputTag value={subSectionForm.title} name={"title"} onChange={(e) => handleOnChnage(e)} className={"border border-white/10"} placeholder={"Add video title"}/>
                            <InputTag value={subSectionForm.description} name={"description"} onChange={(e) => handleOnChnage(e)} className={"border border-white/10"} placeholder={"Add description "}/>    
                        </div>
                        <div className="flex justify-between items-center">
                            <InputTag name={"videoUrl"} onChange={(e) => handleOnChnage(e)}  className={"border border-white/10"} type={"file"} />
                            <Button text={"Add"} btn={"primary"} onClick={() => handleCreateSubSection(el._id)}/>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <InputTag
          className={"w-full"}
          placeholder={"Add Section Name"}
          onChange={(e) => handleChange(e)}
        />
        <Button
          icon={<FaPlus />}
          classStyle={"mt-3"}
          text={"Create Section"}
          btn={"teritory"}
          onClick={handleCourseBuilder}
        />
      </div>
    </div>
  );
};

export default CreateSectionSubSection;
