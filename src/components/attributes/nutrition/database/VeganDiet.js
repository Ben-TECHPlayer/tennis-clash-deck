import React from 'react';
import ReactDOM from 'react-dom/client';

function VeganDiet(){
    return(
        <div className="item-container">
            <div className="card">
                <img src={`${process.env.PUBLIC_URL}/assets/vegan-diet.svg`} alt="Vegan Diet" />
                <p>Vegan Diet</p>
                <div className="infos-card">
                    <p>Unlock to Season 4</p>
                </div>
            </div>
            <div className="table-container">
                <table className="vegan-diet">
                    <caption>Upgrade Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up Cards</td>
                            <td></td>
                            <td>2</td>
                            <td>4</td>
                            <td>10</td>
                            <td>20</td>
                            <td>50</td>
                            <td>150</td>
                            <td>400</td>
                            <td>800</td>
                            <td>1k</td>
                            <td>2k</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Price Upgrade</td>
                            <td></td>
                            <td>7.2k</td>
                            <td>10.9k</td>
                            <td>15k</td>
                            <td>21.7k</td>
                            <td>27.5k</td>
                            <td>35.9k</td>
                            <td>45.9k</td>
                            <td>58.4k</td>
                            <td>75k</td>
                            <td>104.2k</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="vegan-diet">
                    <caption>Skills Table</caption>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Volley</td>
                            <td>3</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>6</td>
                            <td>6</td>
                            <td>6</td>
                            <td>7</td>
                            <td>7</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Stamina</td>
                            <td>0</td>
                            <td>2</td>
                            <td>3</td>
                            <td>6</td>
                            <td>10</td>
                            <td>13</td>
                            <td>18</td>
                            <td>20</td>
                            <td>22</td>
                            <td>24</td>
                            <td>26</td>
                            <td>29</td>
                            <td>31</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Power</th>
                            <th>3</th>
                            <th>6</th>
                            <th>7</th>
                            <th>11</th>
                            <th>15</th>
                            <th>18</th>
                            <th>23</th>
                            <th>26</th>
                            <th>28</th>
                            <th>30</th>
                            <th>33</th>
                            <th>36</th>
                            <th>39</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default VeganDiet;