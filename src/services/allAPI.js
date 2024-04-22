import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

//register api - called by component 
export const registerAPI = async (reqBody)=>{
   return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//login  api - called by component 
export const loginAPI = async (reqBody)=>{
   return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

//add project - called by add component
export const addProjectAPI = async (reqBody,reqHeader)=>{  //reqHeadeer need to be given bz there is a file from our system so the content type need to be multipart or form data not application json
   return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)

}

//getAllProjects
export const getAllProjectsAPI = async(searchKey,reqHeader)=>{
return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,"",reqHeader)  //no body bz its a get request
}

//user projects
export const getUserProjectsAPI = async(reqHeader)=>{
   return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)  //no body bz its a get request
   }


//home projects
export const getHomeProjectsAPI = async()=>{
   return await commonAPI("GET",`${SERVER_URL}/home-projects`,"")
   }

   //edit project
   export const editProjectAPI = async(projectId,reqBody,reqHeader)=>{
      return await commonAPI("PUT",`${SERVER_URL}/edit-project/${projectId}`,reqBody,reqHeader)

   }

   //remove project
   export const removeProjectAPI = async (projectId,reqHeader)=>{
      return await commonAPI("DELETE",`${SERVER_URL}/remove-project/${projectId}`,{},reqHeader)

   }

   //update user
   export const updateUserAPI = async (reqBody,reqHeader)=>{
      return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)

   }

