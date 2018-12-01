import React from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import Zomato from '../shared/Zomato';

export default class Search extends React.Component {
  state = {
    cuisines: [],
    query: ''
  };

  async componentDidMount() {
    const { userLocation } = this.props;
    const cuisinesResponse = await Zomato.getCuisines(
      userLocation.latitude,
      userLocation.longitude
    );
    const cuisines = cuisinesResponse.data.cuisines;
    this.setState({
      cuisines: cuisines.map(data => ({
        label: data.cuisine.cuisine_name
      }))
    });
  }

  handleSearchInput = e => {
    const query = e.target.value;
    this.setState({ query });
  };
  handleCuisineSelect = value => {
    this.setState({ query: value });
  };
  render() {
    return (
      <Outer>
        {this.state.cuisines.length > 0 && (
          <InputStyleWrapper>
            <Autocomplete
              items={this.state.cuisines}
              shouldItemRender={(cuisine, value) =>
                cuisine.label.toLowerCase().includes(value.toLowerCase())
              }
              getItemValue={cuisine => cuisine.label}
              renderItem={(cuisine, isHighlighted) => (
                <div
                  key={cuisine.id}
                  style={{ background: isHighlighted ? 'lightgray' : 'white' }}
                >
                  {cuisine.label}
                </div>
              )}
              onChange={this.handleSearchInput}
              onSelect={this.handleCuisineSelect}
              value={this.state.query}
            />
          </InputStyleWrapper>
        )}
      </Outer>
    );
  }
}

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputStyleWrapper = styled.div`
  input {
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
    border-radius: 2.5px;
    border: none;
  }
`;
