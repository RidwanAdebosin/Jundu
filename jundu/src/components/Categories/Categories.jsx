import "./Categories.css";
import "../Button/Button"

const Category = ({summary, items}) => {
    return(
        <div>
            <details>
                <summary>{summary}</summary>
                <ul>
                    {items.map((item) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </details>
        </div>
    )
};

const Categories = () => {
      const categoriesData = [
          {
            summary: 'Heading Type',
            items: ['In-ear', 'On-ear', 'Over-ear']
        },
        {
            summary: 'Brand',
            items: ['Sony', 'Apple', 'Nokia']
        },
        {
            summary: 'Price Range',
            items: ['₦0-₦1000', '₦1000-₦5000','₦5000-₦10000']
        },

      ];
      return (
        <div className="categories">
            {categoriesData.map((category, index) => {
                <Category key={index} summary={category.summary} items={category.items}/>
            })}
        </div>
      )
    
};

export default Categories;