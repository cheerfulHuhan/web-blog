import { request } from "@/utils/service";
import {submitTitleType} from '../types'
export function submitTitle(data:submitTitleType){
  return request({
    url:'',
    data,
    method:'post'
  })
}