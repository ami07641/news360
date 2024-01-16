import { useContext } from "react";
import { DataContext } from "../../context/MyContext";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { allPosts } = useContext(DataContext);
  const { id } = useParams();
  const findNews = allPosts.find(({ id }) => id == 2);

  console.log("is", id, findNews);

  return (
    <div className="px-2 lg:px-0 my-5 max-w-screen-2xl mx-auto ">
      <div className="space-y-4">
        <h1 className="underline text-xl text-blue-900 font-bold">
          {findNews?.category?.category_name}
        </h1>
        <h1 className="text-4xl font-semibold">{findNews?.post_title}</h1>
        <hr className="border border-4 w-16" />

        <div className="flex justify-between">
          <div>
            <span className="font-semibold">Updated :</span>{" "}
            <span>{findNews?.updated_at}</span>
          </div>
          <div>
            <span className="font-semibold">Repoted by :</span>{" "}
            <span>{findNews?.post_reported_by}</span>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className="max-w-screen-lg mx-auto">
        {/* Image */}
        <div>
          <img
            className="w-full h-full object-contain"
            src={findNews?.post_image}
            alt=""
            srcSet=""
          />
        </div>
        <hr className="my-8 " />
        {/* Description */}
        <div>
          <h1 className="text-justify indent-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            placeat blanditiis dolor quisquam quos eos officia aperiam iure
            accusantium quod et similique est nemo expedita autem ullam unde in
            excepturi ea exercitationem, repellat ipsam deleniti officiis neque.
            Alias at veniam asperiores aliquid. Rem dolores architecto et,
            doloribus dolore nulla aperiam maiores odit ipsum veritatis
            laboriosam quibusdam magnam error quasi porro sunt, eum deleniti
            animi praesentium possimus illum unde deserunt. Harum laborum
            exercitationem doloremque! Id ratione, quia inventore quisquam omnis
            dolores eveniet incidunt nam eius a praesentium. Laboriosam numquam
            rerum possimus rem vitae, repellat ad eum sequi ea totam officia
            officiis recusandae ex, sapiente non quia iure similique animi iste.
            Veniam facilis ipsam quidem doloremque iste molestias tempore
            officiis ex iusto expedita at, amet, enim obcaecati, voluptatibus
            laborum iure numquam! Modi officiis saepe quos fuga enim aperiam
            aliquam, commodi voluptatibus aspernatur minus blanditiis placeat
            ex? Id optio in ea voluptas architecto libero quos? Pariatur quo
            fuga eos laudantium est porro distinctio dicta eligendi, accusamus
            commodi mollitia placeat necessitatibus delectus assumenda provident
            illo itaque, architecto dolores magni, earum sit atque ad
            repellendus hic. Eaque dignissimos laboriosam blanditiis. Suscipit
            enim expedita facilis pariatur fugiat aut, voluptatum explicabo,
            facere quidem laborum tenetur sunt nulla.
          </h1>
          {/* <h1>{findNews?.post_description}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
