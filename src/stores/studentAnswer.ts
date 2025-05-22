import { defineStore } from "pinia";
import { ref } from "vue";

interface StudentAnswer {
  id?: number;
  uuid?: string;
  name: string;
  studentClass: string;
  state_1: string;
  state_2: string;
  state_3: string;
  hypothesis_1: string;
  hypothesis_2: string;
  hypothesis_3: string;
  table_q_1: string;
  table_q_2: string;
  table_q_3: string;
  conslusion: string;
}

interface RequestBody {
  data: StudentAnswer
}

export const useStudentAnswerStore = defineStore('studentAnswer', () => {
  const id = ref('')
  const uuid = ref('')
  const name = ref('')
  const studentClass = ref('')
  const state_1 = ref('')
  const state_2 = ref('')
  const state_3 = ref('')
  const hypothesis_1 = ref('')
  const hypothesis_2 = ref('')
  const hypothesis_3 = ref('')
  const table_q_1 = ref('')
  const table_q_2 = ref('')
  const table_q_3 = ref('')
  const conslusion = ref('')

  const API_URL = import.meta.env.VITE_BASE_API
  const HOST = import.meta.env.VITE_HOST_URL

  async function storeStudentAnswer() {
    try{
      const _body: RequestBody = {
        data: {
          name: name.value,
          studentClass: studentClass.value,
          state_1: encodeURI(state_1.value),
          state_2: encodeURI(state_2.value),
          state_3: encodeURI(state_3.value),
          hypothesis_1: encodeURI(hypothesis_1.value),
          hypothesis_2: encodeURI(hypothesis_2.value),
          hypothesis_3: encodeURI(hypothesis_3.value),
          table_q_1: encodeURI(table_q_1.value),
          table_q_2: encodeURI(table_q_2.value),
          table_q_3: encodeURI(table_q_3.value),
          conslusion: encodeURI(conslusion.value),
        }
      }

      const response = await fetch(`http://${API_URL}/api/answer`, {
        method: 'POST',
        body: JSON.stringify(_body),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Origin': HOST
        })
      })

      const result = await response.json()

      return result
    }
    catch (error) {
      return error
    }
  }

  return {
    id,
    uuid,
    name,
    studentClass,
    state_1,
    state_2,
    state_3,
    hypothesis_1,
    hypothesis_2,
    hypothesis_3,
    table_q_1,
    table_q_2,
    table_q_3,
    conslusion,
    storeStudentAnswer
  }
})
