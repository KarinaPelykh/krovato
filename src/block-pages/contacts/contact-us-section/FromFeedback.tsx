import { Button } from '../../../components/ui'

export const FromFeedback = () => (
  <form className='desktop:w-[410px] desktop:my-auto'>
    <input
      placeholder="Ваше ім'я прізвище"
      className='bg-white border outline-none border-gray-light rounded-lg py-2.5 px-5 w-full
        mb-5 placeholder:text-gray'
    />
    <input
      placeholder='E-mail'
      className='bg-white border outline-none border-gray-light rounded-lg py-2.5 px-5 w-full
        mb-5 placeholder:text-gray'
    />
    <input
      placeholder='Контактний телефон'
      className='bg-white border outline-none border-gray-light rounded-lg py-2.5 px-5 w-full
        mb-5 placeholder:text-gray'
    />
    <textarea
      placeholder='Ваш коментар або питання'
      className='bg-white border outline-none border-gray-light rounded-lg py-2.5 px-5 w-full
        mb-[30px] h-[150px] placeholder:text-gray resize-none'></textarea>
    <Button className='desktop:w-[250px] p-[13px] items-center'>
      Відправити
    </Button>
  </form>
)
