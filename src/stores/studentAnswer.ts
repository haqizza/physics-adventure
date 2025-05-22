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
  tableQ_1: string;
  tableQ_2: string;
  tableQ_3: string;
  conslusion: string;
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
  const tableQ_1 = ref('')
  const tableQ_2 = ref('')
  const tableQ_3 = ref('')
  const conslusion = ref('')

  const API_URL = import.meta.env.VITE_BASE_API

  const _body: StudentAnswer = {
    name: name.value,
    studentClass: studentClass.value,
    state_1: state_1.value,
    state_2: state_2.value,
    state_3: state_3.value,
    hypothesis_1: hypothesis_1.value,
    hypothesis_2: hypothesis_2.value,
    hypothesis_3: hypothesis_3.value,
    tableQ_1: tableQ_1.value,
    tableQ_2: tableQ_2.value,
    tableQ_3: tableQ_3.value,
    conslusion: conslusion.value
  }

  async function storeStudentAnswer() {
    try{
      const response = await fetch(`http://${API_URL}/api/answer`, {
        method: 'POST',
        body: JSON.stringify(_body),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Origin': 'localhost'
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
    tableQ_1,
    tableQ_2,
    tableQ_3,
    conslusion,
    storeStudentAnswer
  }
})
