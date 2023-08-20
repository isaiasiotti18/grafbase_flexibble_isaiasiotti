"use client"

import { SessionInterface } from "@/common.types"
import { ChangeEvent } from "react"
import Image from "next/image"
import FormField from "./FormField"
import { categoryFilters } from "@/constants"
import CustomMenu from "./CustomMenu"

type Props = {
  type: string,
  session: SessionInterface
}

const ProjectForm = ({ type, session }: Props) => {

  const handleFormSubmit = (e: React.FormEvent) => {

  }

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {

  }

  const handleStateChange = (fiedName: string, value: string) => {

  }

  const form = {
    image: '',
    title: '',
    description: '',
    liveSiteUrl: '',
    githubUrl: '',
  };

  return (
    <form action="" onSubmit={handleFormSubmit} className="flexStart form">

      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && 'Choose a poster for your project'}
        </label>
        <input
          title="form_image-input"
          id="image"
          type="file"
          accept="image/"
          required={type === 'create'}
          className="form_image-input"
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="Project Poster"
            fill
          />
        )}
      </div>

      <FormField
        type="text"
        title="Title"
        state={form.title}
        placeholder="Flexibble"
        setState={(value) => handleStateChange('title', value)}
      />

      <FormField
        type="text"
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remakable developer projects."
        setState={(value) => handleStateChange('title', value)}
      />

      <FormField
        type="url"
        title="Website Url"
        state={form.liveSiteUrl}
        placeholder="https://isaiasiotti.dev"
        setState={(value) => handleStateChange('liveSiteUrl', value)}
      />

      <FormField
        type="url"
        title="Github Url"
        state={form.githubUrl}
        placeholder="https://github.com/isaiasiotti1"
        setState={(value) => handleStateChange('githubUrl', value)}
      />

      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange('category', value)}
      />

      <div className="flexStart w-full">
        <button>Create</button>
      </div>
    </form>
  )
}

export default ProjectForm